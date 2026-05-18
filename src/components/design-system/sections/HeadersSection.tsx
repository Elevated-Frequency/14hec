import { Link } from 'react-router-dom'
import { Section, Subsection } from '../primitives'
import CatalogHeader from '../components/CatalogHeader'
import HeroHeader from '../components/headers/HeroHeader'
import GlassPanelHeader from '../components/headers/GlassPanelHeader'
import BrandedTopBar from '../components/headers/BrandedTopBar'
import DashboardHero from '../components/headers/DashboardHero'
import InlineHeader from '../components/headers/InlineHeader'
import CardHeader from '../components/headers/CardHeader'
import Type from '../atoms/Type'
import Badge from '../atoms/Badge'
import Button from '../atoms/Button'
import Notice from '../components/Notice'

const META_LABEL = 'uppercase tracking-[0.18em] text-earth-600'
const PAGE_LINK = 'text-earth-100 hover:text-botanical-300 transition-colors underline decoration-earth-700 underline-offset-2'

function PageLink({ to, children }: { to: string; children: React.ReactNode }) {
  return <Link to={to} className={PAGE_LINK}>{children}</Link>
}

function UsageTable({
  columns,
  rows,
}: {
  columns: string[]
  rows: (string | React.ReactNode)[][]
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-earth-900/30 p-4">
      <div className="text-[10px] font-system text-earth-500 mb-2">
        <span className={META_LABEL}>Currently in app:</span>
      </div>
      <table className="w-full text-xs font-system">
        <thead>
          <tr className="text-left text-earth-500">
            {columns.map((col) => (
              <th key={col} className="pb-2 pr-4 font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-earth-300">
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/5">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-2 ${j < row.length - 1 ? 'pr-4' : ''} ${j === 0 ? 'text-earth-100' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Gradient catalog ──────────────────────────────────────────────────

interface GradientSwatch {
  label: string
  gradient: string
}

const DARK_STANDARD = 'rgba(16, 15, 12, 0.85)'
const DARK_WARM = 'rgba(26, 25, 21, 0.65)'
const DARK_COOL = 'rgba(24, 23, 33, 0.65)'

const HERO_3_STOP: GradientSwatch[] = [
  {
    label: 'Conventional',
    gradient: `linear-gradient(135deg, rgba(26, 90, 58, 0.12) 0%, ${DARK_STANDARD} 50%, rgba(93, 168, 126, 0.04) 100%)`,
  },
  {
    label: 'Entheogenic',
    gradient: `linear-gradient(135deg, rgba(52, 28, 115, 0.15) 0%, ${DARK_STANDARD} 50%, rgba(124, 94, 237, 0.04) 100%)`,
  },
  {
    label: 'Both',
    gradient: `linear-gradient(135deg, rgba(26, 90, 58, 0.1) 0%, ${DARK_STANDARD} 50%, rgba(52, 28, 115, 0.08) 100%)`,
  },
  {
    label: 'CSS default',
    gradient: `linear-gradient(135deg, rgba(93, 168, 126, 0.04) 0%, ${DARK_STANDARD} 40%, rgba(124, 94, 237, 0.03) 100%)`,
  },
]

const STANDARD_2_STOP: GradientSwatch[] = [
  { label: 'Spring', gradient: `linear-gradient(135deg, rgba(61, 138, 94, 0.12), ${DARK_STANDARD})` },
  { label: 'Summer', gradient: `linear-gradient(135deg, rgba(245, 158, 11, 0.12), ${DARK_STANDARD})` },
  { label: 'Autumn', gradient: `linear-gradient(135deg, rgba(249, 115, 22, 0.12), ${DARK_STANDARD})` },
  { label: 'Winter', gradient: `linear-gradient(135deg, rgba(59, 130, 246, 0.08), ${DARK_STANDARD})` },
  { label: 'Heart', gradient: `linear-gradient(135deg, rgba(244, 63, 94, 0.12), ${DARK_STANDARD})` },
  { label: 'Mind', gradient: `linear-gradient(135deg, rgba(59, 130, 246, 0.12), ${DARK_STANDARD})` },
  { label: 'Body', gradient: `linear-gradient(135deg, rgba(61, 138, 94, 0.12), ${DARK_STANDARD})` },
  { label: 'Spirit', gradient: `linear-gradient(135deg, rgba(168, 85, 247, 0.12), ${DARK_STANDARD})` },
  { label: 'Sun', gradient: `linear-gradient(135deg, rgba(245, 158, 11, 0.10), ${DARK_STANDARD})` },
  { label: 'Moon', gradient: `linear-gradient(135deg, rgba(147, 197, 253, 0.08), ${DARK_STANDARD})` },
  { label: 'Venus', gradient: `linear-gradient(135deg, rgba(244, 114, 182, 0.08), ${DARK_STANDARD})` },
  { label: 'Mars', gradient: `linear-gradient(135deg, rgba(248, 113, 113, 0.08), ${DARK_STANDARD})` },
]

const ALT_DARK_2_STOP: GradientSwatch[] = [
  { label: 'Journal', gradient: `linear-gradient(135deg, rgba(245, 158, 11, 0.03), ${DARK_WARM})` },
  { label: 'Collection (botanical)', gradient: `linear-gradient(135deg, rgba(74, 222, 128, 0.10), ${DARK_COOL})` },
  { label: 'Collection (celestial)', gradient: `linear-gradient(135deg, rgba(124, 94, 237, 0.10), ${DARK_COOL})` },
  { label: 'Collection (gold)', gradient: `linear-gradient(135deg, rgba(245, 158, 11, 0.10), ${DARK_COOL})` },
  { label: 'Collection (heart)', gradient: `linear-gradient(135deg, rgba(244, 63, 94, 0.10), ${DARK_COOL})` },
  { label: 'Collection (mind)', gradient: `linear-gradient(135deg, rgba(59, 130, 246, 0.10), ${DARK_COOL})` },
]

// ─── Orb catalog ───────────────────────────────────────────────────────

interface OrbSwatch {
  label: string
  color: string
  /** Pages that use this orb color. */
  usage: string
}

const HERO_ORBS: OrbSwatch[] = [
  { label: 'Botanical', color: 'rgba(61, 138, 94, 0.3)', usage: 'Ailment (physical)' },
  { label: 'Blue', color: 'rgba(59, 130, 246, 0.3)', usage: 'Ailment (emotional)' },
  { label: 'Gold', color: 'rgba(234, 179, 8, 0.3)', usage: 'Ailment (spiritual)' },
  { label: 'Botanical (soft)', color: 'rgba(93, 168, 126, 0.2)', usage: 'Wellness' },
  { label: 'Rose', color: 'rgba(244, 63, 94, 0.25)', usage: 'Body Systems (organ)' },
  { label: 'Blue', color: 'rgba(59, 130, 246, 0.25)', usage: 'Body Systems (system)' },
  { label: 'Purple', color: 'rgba(168, 85, 247, 0.25)', usage: 'Body Systems (gland)' },
  { label: 'Amber', color: 'rgba(245, 158, 11, 0.25)', usage: 'Body Systems (tissue)' },
  { label: 'Green', color: 'rgba(61, 138, 94, 0.25)', usage: 'Body Systems (structure)' },
]

const TAILWIND_ORBS: OrbSwatch[] = [
  { label: 'botanical-500', color: '#3d8a5e', usage: 'PlantDetail (single orb)' },
  { label: 'purple-500', color: '#a855f7', usage: 'HMBSView (top-right)' },
  { label: 'rose-500', color: '#f43f5e', usage: 'HMBSView (bottom-left)' },
  { label: 'botanical-300', color: '#8ac0a0', usage: 'Dashboard (top-right)' },
  { label: 'celestial-200', color: '#bcb8f9', usage: 'Dashboard (bottom-left)' },
]

function OrbTile({ orb }: { orb: OrbSwatch }) {
  return (
    <div className="space-y-1.5">
      <div className="h-16 rounded-xl border border-white/[0.06] relative overflow-hidden bg-black/40">
        <div
          className="absolute w-20 h-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: orb.color, filter: 'blur(24px)' }}
        />
      </div>
      <p className="text-[10px] text-earth-400 font-system text-center">
        {orb.label}
      </p>
      <p className="text-[9px] text-earth-600 font-system text-center leading-tight">
        {orb.usage}
      </p>
    </div>
  )
}

function SwatchTile({ swatch }: { swatch: GradientSwatch }) {
  return (
    <div className="space-y-1.5">
      <div
        className="h-16 rounded-xl border border-white/[0.06]"
        style={{ background: swatch.gradient }}
      />
      <p className="text-[10px] text-earth-400 font-system text-center">
        {swatch.label}
      </p>
    </div>
  )
}

function SwatchGroup({
  label,
  darkAnchor,
  swatches,
}: {
  label: string
  darkAnchor: string
  swatches: GradientSwatch[]
}) {
  return (
    <div>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-[10px] uppercase tracking-[0.18em] text-earth-500 font-system font-medium">
          {label}
        </span>
        <code className="text-[10px] text-earth-600 font-system">{darkAnchor}</code>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {swatches.map((s) => (
          <SwatchTile key={s.label} swatch={s} />
        ))}
      </div>
    </div>
  )
}

export default function HeadersSection() {
  return (
    <Section id="headers" title="Headers">
      {/* ─── Gradients ──────────────────────────────────────────────── */}
      <Subsection title="Gradients">
        <div className="space-y-4">
          <p className="text-earth-300 text-sm font-system leading-relaxed">
            All header gradients sweep at 135deg from a low-opacity tint
            to a near-black anchor. Three dark anchors exist in the
            codebase today — the standard warm black, a lighter warm
            variant, and a cooler blue-ish variant. PlantDetail is the
            only page using a three-stop gradient (tint → dark → tint);
            everything else fades to dark in two stops.
          </p>

          <SwatchGroup
            label="Three-stop hero"
            darkAnchor="mid: rgba(16, 15, 12, 0.85)"
            swatches={HERO_3_STOP}
          />
          <SwatchGroup
            label="Standard two-stop"
            darkAnchor="end: rgba(16, 15, 12, 0.85)"
            swatches={STANDARD_2_STOP}
          />
          <SwatchGroup
            label="Alternate dark end"
            darkAnchor="end: rgba(26, 25, 21) / rgba(24, 23, 33)"
            swatches={ALT_DARK_2_STOP}
          />

          <div className="border-t border-white/5 pt-4 mt-2">
            <p className="text-earth-300 text-sm font-system leading-relaxed mb-4">
              Hero headers also layer 1–2 decorative blur orbs —
              absolutely positioned circles with <code>filter:
              blur(100px)</code> and <code>opacity: 0.12</code> (from
              the <code>hero-orb</code> class). Some pages override the
              opacity via inline style. The orbs tint the gradient
              locally, creating a soft glow in one corner.
            </p>
            <p className="text-earth-300 text-xs font-system leading-relaxed mb-4">
              <span className={META_LABEL}>Layouts:</span>{' '}
              <strong className="text-earth-200 font-medium">Pair</strong>{' '}
              (large top-right + small bottom-left, staggered animation)
              — Ailment, Wellness, BodySystems.{' '}
              <strong className="text-earth-200 font-medium">Single</strong>{' '}
              (top-right) — PlantDetail.{' '}
              <strong className="text-earth-200 font-medium">Dual accent</strong>{' '}
              (two different colors) — HMBSView, Dashboard.
            </p>
          </div>

          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-[0.18em] text-earth-500 font-system font-medium">
                Inline style orbs
              </span>
              <code className="text-[10px] text-earth-600 font-system">rgba color, opacity baked in</code>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {HERO_ORBS.map((o) => (
                <OrbTile key={`${o.label}-${o.usage}`} orb={o} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-[0.18em] text-earth-500 font-system font-medium">
                Tailwind class orbs
              </span>
              <code className="text-[10px] text-earth-600 font-system">bg-* class, hero-orb base opacity</code>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {TAILWIND_ORBS.map((o) => (
                <OrbTile key={`${o.label}-${o.usage}`} orb={o} />
              ))}
            </div>
          </div>
        </div>
      </Subsection>

      {/* ─── CatalogHeader ──────────────────────────────────────────── */}
      <Subsection title="CatalogHeader">
        <div className="space-y-4">
          <p className="text-earth-300 text-sm font-system leading-relaxed">
            Canonical page header for the <code>header</code> slot of{' '}
            <code>CatalogLayout</code>. Title + optional count badge +
            optional subtitle + optional trailing actions. Owns its own
            gutters so the layout stays opinion-free about padding.
          </p>
          <p className="text-earth-300 text-xs font-system leading-relaxed">
            <span className={META_LABEL}>Props:</span>{' '}
            <code>title</code>, <code>count?</code>, <code>total?</code>,{' '}
            <code>subtitle?</code>, <code>backTo?</code>, <code>actions?</code>
          </p>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Minimal — title only
          </div>
          <div className="rounded-xl border border-white/5 overflow-hidden bg-earth-900/20">
            <CatalogHeader title="Plants" />
          </div>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            With count, subtitle, and back link
          </div>
          <div className="rounded-xl border border-white/5 overflow-hidden bg-earth-900/20">
            <CatalogHeader
              title="Ailments"
              count={42}
              total={75}
              subtitle="Conditions across physical, emotional, and spiritual dimensions, grouped by body system."
              backTo={{ to: '/design-system', label: 'Back to catalog' }}
            />
          </div>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            With actions slot
          </div>
          <div className="rounded-xl border border-white/5 overflow-hidden bg-earth-900/20">
            <CatalogHeader
              title="Journal"
              count={12}
              subtitle="Reflections on plants, practice, and what they reveal."
              actions={<Button.Primary>+ New entry</Button.Primary>}
            />
          </div>

          <UsageTable
            columns={['Page', 'Customizations']}
            rows={[
              [<PageLink to="/plants">Plants</PageLink>, 'count + total (filtered state), subtitle, FilterBar below'],
              [<PageLink to="/ailments">Ailments</PageLink>, 'count + total, subtitle, FilterBar with search + category select'],
              [<PageLink to="/wellness">Wellness Goals</PageLink>, 'count + total, subtitle, FilterBar'],
              [<PageLink to="/body-systems">Body Systems</PageLink>, 'count + total, subtitle, grouped by category'],
              [<PageLink to="/journal">Journal</PageLink>, 'conditional count (only when filters active), subtitle, actions slot (+ New entry button)'],
              [<PageLink to="/collections">Collections</PageLink>, 'optional count, subtitle, actions slot (+ New collection button)'],
              [<PageLink to="/preparations">Preparations</PageLink>, 'count, subtitle, table layout below'],
            ]}
          />
        </div>
      </Subsection>

      {/* ─── HeroHeader ─────────────────────────────────────────────── */}
      <Subsection title="HeroHeader">
        <div className="space-y-4">
          <p className="text-earth-300 text-sm font-system leading-relaxed">
            Full-bleed gradient header for detail pages. A dark{' '}
            <code>hero-section</code> container with category-colored blur
            orbs, a content slot for title / badges / description, and an
            optional <code>divider-gradient</code> bottom edge. Each page
            picks its own gradient and orb colors.
          </p>
          <p className="text-earth-300 text-xs font-system leading-relaxed">
            <span className={META_LABEL}>Props:</span>{' '}
            <code>gradient?</code>, <code>border?</code>,{' '}
            <code>orbs?</code> (color string | HeroOrb[] | 'none'),{' '}
            <code>divider?</code>, <code>children</code>
          </p>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Botanical — conventional plant (green gradient, paired orbs)
          </div>
          <HeroHeader
            gradient="linear-gradient(135deg, rgba(26, 90, 58, 0.12) 0%, rgba(16, 15, 12, 0.85) 50%, rgba(93, 168, 126, 0.04) 100%)"
            orbs="rgba(93, 168, 126, 0.2)"
          >
            <Type.Display className="text-botanical-400 tracking-wide">Yarrow</Type.Display>
            <p className="text-lg text-earth-500 italic font-display mt-1">Achillea millefolium</p>
            <p className="text-sm text-earth-600 mt-1">Asteraceae</p>
            <p className="text-earth-300 mt-4 leading-relaxed">
              A warrior's herb that staunches wounds and opens the channels of courage. Ruled by Venus, it bridges the heart and the blood.
            </p>
          </HeroHeader>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Celestial — entheogenic plant (purple gradient)
          </div>
          <HeroHeader
            gradient="linear-gradient(135deg, rgba(52, 28, 115, 0.15) 0%, rgba(16, 15, 12, 0.85) 50%, rgba(124, 94, 237, 0.04) 100%)"
            orbs="rgba(124, 94, 237, 0.15)"
          >
            <div className="flex items-center gap-3 mb-2">
              <Type.Display>Psilocybe</Type.Display>
              <Badge.Entheogenic>entheogenic</Badge.Entheogenic>
            </div>
            <p className="text-earth-300 mt-3 leading-relaxed">
              Mycelial teacher of dissolution and reconnection. Demands humility, intention, and a safe container.
            </p>
          </HeroHeader>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            No orbs, no divider — minimal variant
          </div>
          <HeroHeader orbs="none" divider={false}>
            <div className="flex items-center gap-3">
              <Type.Display>Headache</Type.Display>
              <span className="badge badge-conventional">physical</span>
            </div>
            <p className="text-sm text-earth-500 mt-1">Nervous System</p>
            <p className="text-earth-300 mt-3 leading-relaxed">
              Tension, vascular, or cluster — the body signaling overload.
            </p>
          </HeroHeader>

          <UsageTable
            columns={['Page', 'Gradient basis', 'Customizations']}
            rows={[
              [
                <PageLink to="/plants/1">PlantDetail</PageLink>,
                'Category: entheogenic (purple), conventional (green), both (hybrid)',
                'Latin name + family, description, collection save button, energetic quality, legal notice badge. Single orb.',
              ],
              [
                <PageLink to="/ailments/1">AilmentDetail</PageLink>,
                'Category: physical (botanical), emotional (celestial), spiritual (gold)',
                'Category badge, body system text, symptoms. Two orbs with staggered animation.',
              ],
              [
                <PageLink to="/wellness/1">WellnessDetail</PageLink>,
                'Fixed botanical green',
                'Category icon + name eyebrow, desired outcome inset card, body system text. Two orbs.',
              ],
              [
                <PageLink to="/body-systems/1">BodySystemsDetail</PageLink>,
                'Category: organ (rose), system (blue), gland (purple), tissue (amber), structure (green)',
                'Category badge with ring styling, description. Two orbs colored by category.',
              ],
              [
                <PageLink to="/hmbs">HMBSView</PageLink>,
                'Fixed (rose + purple orbs)',
                'Vertical 4-color gradient bar, title with text-gradient-hmbs, italic quote. Wrapped in catalog gutters.',
              ],
            ]}
          />
        </div>
      </Subsection>

      {/* ─── GlassPanelHeader ───────────────────────────────────────── */}
      <Subsection title="GlassPanelHeader">
        <div className="space-y-4">
          <p className="text-earth-300 text-sm font-system leading-relaxed">
            Glassmorphism header for sanctuary detail pages. A translucent{' '}
            <code>glass-panel</code> container with a large icon, heading
            title with domain-colored text, optional metadata, and slots
            for inset detail cards via{' '}
            <code>GlassPanelHeader.InsetCard</code>.
          </p>
          <p className="text-earth-300 text-xs font-system leading-relaxed">
            <span className={META_LABEL}>Props:</span>{' '}
            <code>gradient</code>, <code>icon</code>, <code>title</code>,{' '}
            <code>titleColor?</code>, <code>metadata?</code>,{' '}
            <code>description?</code>, <code>children?</code>
          </p>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Season variant — with metadata badges and inset cards
          </div>
          <GlassPanelHeader
            gradient="linear-gradient(135deg, rgba(234, 88, 12, 0.08) 0%, rgba(26, 25, 21, 0.6) 100%)"
            icon="🍂"
            title="Autumn"
            titleColor="text-orange-300"
            description="The season of harvest and release — when the earth draws inward and plants concentrate their medicine in roots and bark."
            metadata={
              <div className="flex gap-2">
                <Badge.Fire>Fire</Badge.Fire>
                <span className="text-xs text-earth-500">Sep – Nov</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <GlassPanelHeader.InsetCard label="Active Signs">
                <div className="flex flex-wrap gap-2">
                  <Badge.Fire>♎ Libra</Badge.Fire>
                  <Badge.Water>♏ Scorpio</Badge.Water>
                  <Badge.Fire>♐ Sagittarius</Badge.Fire>
                </div>
              </GlassPanelHeader.InsetCard>
              <GlassPanelHeader.InsetCard label="Body Focus">
                <p className="text-sm text-earth-300">Lungs, large intestine, skin</p>
              </GlassPanelHeader.InsetCard>
            </div>
          </GlassPanelHeader>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Domain variant — HMBS style with frequency and body areas
          </div>
          <GlassPanelHeader
            gradient="linear-gradient(135deg, rgba(244, 63, 94, 0.08) 0%, rgba(26, 25, 21, 0.6) 100%)"
            icon="♡"
            title="The Heart Domain"
            titleColor="text-rose-300"
            description="Plants that open the channels of love, empathy, and emotional connection."
            metadata={
              <p className="text-xs text-earth-500">528 Hz — the frequency of love</p>
            }
          >
            <GlassPanelHeader.InsetCard label="Body Areas" className="mt-4">
              <p className="text-sm text-earth-300">Heart, chest, circulatory system, thymus</p>
            </GlassPanelHeader.InsetCard>
          </GlassPanelHeader>

          <UsageTable
            columns={['Page', 'Gradient basis', 'Customizations']}
            rows={[
              [
                <PageLink to="/seasonal/autumn">SeasonalDetail</PageLink>,
                'Season-specific gradient',
                '5xl icon, element badge, months text, 2-column inset grid (Active Signs + Body Focus). Desktop tab selector.',
              ],
              [
                <PageLink to="/hmbs/heart">HMBSDomainDetail</PageLink>,
                'Domain: heart (rose), mind (blue), body (green), spirit (purple)',
                '5xl icon (opacity 40%), frequency text, single inset card for body areas. Desktop tab selector.',
              ],
            ]}
          />
        </div>
      </Subsection>

      {/* ─── BrandedTopBar ──────────────────────────────────────────── */}
      <Subsection title="BrandedTopBar">
        <div className="space-y-4">
          <p className="text-earth-300 text-sm font-system leading-relaxed">
            Lightweight branded header for index pages atop a{' '}
            <code>ListDetailLayout</code>. A Playfair-set gradient title,
            small subtitle, and an optional <code>Notice</code> or callout
            below. No count badge, no back link, no actions.
          </p>
          <p className="text-earth-300 text-xs font-system leading-relaxed">
            <span className={META_LABEL}>Props:</span>{' '}
            <code>title</code>, <code>titleGradient?</code>,{' '}
            <code>subtitle?</code>, <code>children?</code> (notice slot)
          </p>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Gold gradient — with philosophy quote
          </div>
          <div className="rounded-xl border border-white/5 overflow-hidden bg-earth-900/20">
            <BrandedTopBar
              title="Doctrine of Plant Teachings"
              titleGradient="text-gradient-gold"
              subtitle="What each plant activates within you — energetic, mental, physical, and spiritual teachings."
            >
              <Notice tone="info" icon="❝">
                <em className="not-italic">
                  "Plants activate what is already within us. They are mirrors
                  and catalysts, not additions."
                </em>
              </Notice>
            </BrandedTopBar>
          </div>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Celestial gradient — with safety advisory
          </div>
          <div className="rounded-xl border border-white/5 overflow-hidden bg-earth-900/20">
            <BrandedTopBar
              title="Entheogenic Journey Guide"
              titleGradient="text-gradient-celestial"
              subtitle="Sacred plant medicine guidance: preparation, set & setting, and integration"
            >
              <Notice title="Sacred Responsibility">
                Entheogenic plants are powerful teachers that demand respect,
                preparation, and integration.
              </Notice>
            </BrandedTopBar>
          </div>

          <UsageTable
            columns={['Page', 'Title gradient', 'Customizations']}
            rows={[
              [
                <PageLink to="/doctrine">DoctrineExplorer</PageLink>,
                <code key="g">text-gradient-gold</code>,
                <>Notice with philosophy quote. Used as top of ListDetailLayout.</>,
              ],
              [
                <PageLink to="/entheogens">EntheogenicGuide</PageLink>,
                <code key="c">text-gradient-celestial</code>,
                <>Notice with safety advisory. Used as top of ListDetailLayout.</>,
              ],
            ]}
          />
        </div>
      </Subsection>

      {/* ─── DashboardHero ──────────────────────────────────────────── */}
      <Subsection title="DashboardHero">
        <div className="space-y-4">
          <p className="text-earth-300 text-sm font-system leading-relaxed">
            The app's landing hero. A black rounded card with animated blur
            orbs, a vertical gradient accent bar, a{' '}
            <code>Type.Branded.Display</code> title, and a content slot for
            the global search combobox. One-of-a-kind — used only on the
            Dashboard.
          </p>
          <p className="text-earth-300 text-xs font-system leading-relaxed">
            <span className={META_LABEL}>Props:</span>{' '}
            <code>title?</code>, <code>subtitle?</code>,{' '}
            <code>children?</code> (search slot)
          </p>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Default — branded title with subtitle
          </div>
          <DashboardHero subtitle="Herbal · Energetic · Celestial — Cross-reference plants, ailments, and astrology" />

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            With children slot (search placeholder)
          </div>
          <DashboardHero subtitle="Herbal · Energetic · Celestial">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-earth-500">
              Search plants, ailments, or conditions...
            </div>
          </DashboardHero>

          <div className="rounded-xl border border-white/5 bg-earth-900/30 p-4">
            <div className="text-[10px] font-system text-earth-500 mb-2">
              <span className={META_LABEL}>Currently in app:</span>
            </div>
            <p className="text-earth-300 text-xs font-system">
              <Link to="/" className={PAGE_LINK}>Dashboard</Link>{' '}
              — standalone component (<code>DashboardHeader.tsx</code>).
              The search combobox with keyboard navigation is passed via
              the <code>children</code> slot.
            </p>
          </div>
        </div>
      </Subsection>

      {/* ─── InlineHeader ───────────────────────────────────────────── */}
      <Subsection title="InlineHeader">
        <div className="space-y-4">
          <p className="text-earth-300 text-sm font-system leading-relaxed">
            Minimal header with no container, gradient, or decorative
            elements. An optional icon, a title, and slots for
            subtitle/metadata and trailing actions. The lightest-weight
            header — used where the page content provides visual weight.
          </p>
          <p className="text-earth-300 text-xs font-system leading-relaxed">
            <span className={META_LABEL}>Props:</span>{' '}
            <code>title</code>, <code>icon?</code>, <code>as?</code>,{' '}
            <code>titleClassName?</code>, <code>children?</code>,{' '}
            <code>actions?</code>
          </p>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Title only — simplest form
          </div>
          <div className="rounded-xl border border-white/5 bg-earth-900/20 p-4">
            <InlineHeader title="Planetary Timing">
              <p className="text-xs text-earth-500 mt-0.5">
                Optimal times for harvesting, preparing, and taking plant medicines
              </p>
            </InlineHeader>
          </div>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            With icon — planet detail pane
          </div>
          <div className="rounded-xl border border-white/5 bg-earth-900/20 p-4">
            <InlineHeader
              icon={<span className="text-5xl">☉</span>}
              title="Sun"
              as="h2"
            >
              <p className="text-sm text-earth-500">Leo</p>
            </InlineHeader>
          </div>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            With icon, badges, and actions
          </div>
          <div className="rounded-xl border border-white/5 bg-earth-900/20 p-4">
            <InlineHeader
              icon={<span className="text-5xl">♈</span>}
              title="Aries"
              as="h2"
              actions={
                <Button.Ghost>Full profile →</Button.Ghost>
              }
            >
              <div className="flex flex-wrap gap-2 mt-1.5">
                <Badge.Fire>fire</Badge.Fire>
                <span className="badge bg-earth-800/50 text-earth-300 ring-1 ring-inset ring-earth-600/20">
                  cardinal
                </span>
              </div>
            </InlineHeader>
          </div>

          <UsageTable
            columns={['Page', 'Customizations']}
            rows={[
              [
                <PageLink to="/preparations/1">PreparationDetail</PageLink>,
                'PageTitle + optional absorption speed badge. Subtitle describes the method.',
              ],
              [
                <PageLink to="/astrology/planetary-timing">PlanetaryTiming</PageLink>,
                'Static PageTitle + subtitle. No icon, no badge.',
              ],
              [
                <PageLink to="/astrology/planets/sun">PlanetsView (detail)</PageLink>,
                'Planet symbol (5xl) + PageTitle as h2 + associated signs text.',
              ],
              [
                <PageLink to="/astrology/signs/aries">SignsView (detail)</PageLink>,
                'Zodiac icon + PageTitle as h2 + element badge + modality badge + color chips.',
              ],
              [
                <PageLink to="/doctrine">DoctrineDetail</PageLink>,
                'Heading in amber + italic latin name. Trailing "Full profile" ghost button.',
              ],
            ]}
          />
        </div>
      </Subsection>

      {/* ─── CardHeader ─────────────────────────────────────────────── */}
      <Subsection title="CardHeader">
        <div className="space-y-4">
          <p className="text-earth-300 text-sm font-system leading-relaxed">
            A header rendered inside a styled card with a gradient
            background. Provides visual weight without the full hero
            treatment. Each consumer picks its own card surface, gradient,
            and metadata layout.
          </p>
          <p className="text-earth-300 text-xs font-system leading-relaxed">
            <span className={META_LABEL}>Props:</span>{' '}
            <code>gradient?</code>, <code>border?</code>,{' '}
            <code>surface?</code>, <code>icon?</code>, <code>title</code>,{' '}
            <code>as?</code>, <code>titleClassName?</code>,{' '}
            <code>children?</code>, <code>actions?</code>,{' '}
            <code>divider?</code>
          </p>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Journal style — amber gradient with divider
          </div>
          <CardHeader
            surface="card"
            gradient="linear-gradient(135deg, rgba(245, 158, 11, 0.03) 0%, rgba(26, 25, 21, 0.65) 100%)"
            border="1px solid rgba(245, 158, 11, 0.06)"
            title="Morning practice with Yarrow"
            divider
          >
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-earth-500">May 17, 2026</span>
              <span className="text-earth-700 text-xs">·</span>
              <span className="text-xs text-botanical-500">☘ Yarrow</span>
              <span className="text-earth-700 text-xs">·</span>
              <span className="text-xs text-amber-400">☀ grateful</span>
            </div>
          </CardHeader>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Collection style — icon, color theme, actions
          </div>
          <CardHeader
            gradient="linear-gradient(135deg, rgba(93, 168, 126, 0.06) 0%, rgba(24, 23, 33, 0.65) 100%)"
            border="1px solid rgba(93, 168, 126, 0.1)"
            icon="☘"
            title="Spring Allies"
            titleClassName="text-botanical-300"
            actions={
              <div className="flex items-center gap-2">
                <Button.Ghost>Edit</Button.Ghost>
                <Button.Ghost>Delete</Button.Ghost>
              </div>
            }
          >
            <p className="text-earth-400 text-sm mt-1">
              Plants for seasonal transition and renewal
            </p>
            <span className="text-[10px] text-earth-500 mt-1 block">
              8 plants
            </span>
          </CardHeader>

          <div className="text-[10px] uppercase tracking-[0.18em] text-earth-500 mb-2">
            Celestial glow — planet detail style
          </div>
          <CardHeader
            surface="card-glow-celestial"
            gradient="linear-gradient(135deg, rgba(250, 204, 21, 0.08) 0%, rgba(16, 15, 12, 0.85) 100%)"
            icon={<span className="text-4xl">☉</span>}
            title="Sun-Aligned Plants"
            as="h1"
          >
            <p className="text-sm text-earth-400 mt-1">
              Plants best harvested, prepared, or taken during Sun hours and days.
            </p>
          </CardHeader>

          <UsageTable
            columns={['Page', 'Surface', 'Customizations']}
            rows={[
              [
                <PageLink to="/journal">JournalView</PageLink>,
                <code key="s1">card</code>,
                'Heading title, metadata row (date, plant, mood, season). Optional "Guided by" inset card. divider-gradient at bottom.',
              ],
              [
                <PageLink to="/collections">CollectionsView</PageLink>,
                <code key="s2">rounded-2xl</code>,
                'Icon (3xl, 50% opacity) + PageTitle in collection color, description, plant count. Edit/Delete actions. Color-themed gradient.',
              ],
              [
                <PageLink to="/astrology/planetary-timing/sun">PlanetaryTimingDetail</PageLink>,
                <code key="s3">card-glow-celestial</code>,
                'Planet symbol (4xl) + PageTitle + subtitle. Gradient from planet-specific color map.',
              ],
            ]}
          />
        </div>
      </Subsection>
    </Section>
  )
}
