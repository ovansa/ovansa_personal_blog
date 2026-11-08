"""Build the PDF and website download from config/resume.json.

Requires: python3 -m pip install reportlab
Run from any directory: python3 scripts/build_resume.py
The input resume at the repository root is replaced with the generated version.
"""
from pathlib import Path
from xml.sax.saxutils import escape
import json
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether, HRFlowable,
)

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'config/resume.json').read_text())
output = ROOT / 'output/pdf/resume-muhammed-ibrahim.pdf'
output.parent.mkdir(parents=True, exist_ok=True)
INK = colors.HexColor('#172B36')
TEAL = colors.HexColor('#155766')
MUTED = colors.HexColor('#465862')
RULE = colors.HexColor('#CBD5D9')

styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=25, leading=30, textColor=TEAL, spaceAfter=5),
    'title': ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=12, leading=17, textColor=INK, spaceAfter=3),
    'focus': ParagraphStyle('focus', fontName='Helvetica', fontSize=10, leading=14, textColor=MUTED, spaceAfter=9),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=9, leading=13, textColor=MUTED, spaceAfter=3),
    'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=10.5, leading=14, textColor=TEAL, spaceBefore=14, spaceAfter=7, keepWithNext=True),
    'role': ParagraphStyle('role', fontName='Helvetica-Bold', fontSize=10.8, leading=14, textColor=INK, spaceAfter=3, keepWithNext=True),
    'meta': ParagraphStyle('meta', fontName='Helvetica', fontSize=9.3, leading=13, textColor=MUTED, spaceAfter=6, keepWithNext=True),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=10.2, leading=14.3, textColor=INK, spaceAfter=5, alignment=TA_LEFT),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=10.2, leading=14.3, textColor=INK, leftIndent=10, firstLineIndent=0, bulletIndent=0, spaceAfter=5),
    'small': ParagraphStyle('small', fontName='Helvetica', fontSize=9.6, leading=13.5, textColor=INK, spaceAfter=5),
}

def para(text, style='body'):
    return Paragraph(escape(text), styles[style])

def link(url, label):
    return f'<link href="{escape(url, {chr(34): "&quot;"})}" color="#155766">{escape(label)}</link>'

def section(title):
    return [para(title.upper(), 'section'), HRFlowable(width='100%', thickness=0.5, color=RULE, spaceAfter=8)]

def job(item):
    title = para(item['role'], 'role')
    meta = para(f"{item['company']} | {item['period']} | {item['location']}", 'meta')
    bullets = [Paragraph(escape(b), styles['bullet'], bulletText='-') for b in item['bullets']]
    return [KeepTogether([title, meta, *bullets]), Spacer(1, 7)]

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(44, 33, A4[0] - 44, 33)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(44, 21, data['name'] + ' | ovansa.me')
    canvas.drawRightString(A4[0] - 44, 21, str(doc.page))
    canvas.restoreState()

story = [para(data['name'], 'name'), para(data['title'], 'title'), para(data['focus'], 'focus')]
story += [Paragraph(' | '.join([
    escape(data['location']), link('mailto:' + data['email'], data['email']),
    link('tel:' + data['phone'], data['phone']),
]), styles['contact'])]
story += [Paragraph(' | '.join([
    link(data['website'], 'ovansa.me'),
    link(data['github'], 'github.com/ovansa'),
    link(data['linkedin'], 'linkedin.com/in/ovansa'),
]), styles['contact'])]
story += section('Summary') + [para(data['summary'])]
story += section('Experience')
for item in data['experience'][:3]:
    story += job(item)
story += [PageBreak()]
story += section('Experience - continued') + job(data['experience'][3])
story += section('Selected public work')
story += [Paragraph(link(data['project']['url'], data['project']['name']), styles['role'])]
story += [para(data['project']['description']), para(data['project']['detail'], 'small')]
story += [Paragraph(link(data['project']['url'], 'github.com/ovansa/task-api') + ' | ' + link(data['website'] + data['project']['articleUrl'], 'Read the testing approach'), styles['small'])]
story += section('Skills')
for group in data['skills']:
    story += [Paragraph('<b>' + escape(group['category']) + ':</b> ' + escape(', '.join(group['items'])), styles['small'])]
story += section('Education & professional development')
story += [para(data['education']['degree'] + ' - ' + data['education']['institution'], 'role')]
story += [para(data['education']['period'], 'meta')]
for credential in data['credentials']:
    name = link(credential['url'], credential['name']) if credential.get('url') else escape(credential['name'])
    story += [Paragraph('<b>' + name + '</b> - ' + escape(credential['issuer']), styles['small'])]
story += [Spacer(1, 4), para(data['language'], 'small')]

doc = SimpleDocTemplate(str(output), pagesize=A4, rightMargin=44, leftMargin=44,
    topMargin=36, bottomMargin=45, title=f"{data['name']} - {data['title']}",
    author=data['name'], subject=data['focus'], pageCompression=1)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
for target in [ROOT / 'public' / data['downloadPath'].lstrip('/'), ROOT / 'Resume - Muhammed Ibrahim.pdf']:
    shutil.copyfile(output, target)
print(f'Built {output.relative_to(ROOT)} and synced the original resume and public download.')
