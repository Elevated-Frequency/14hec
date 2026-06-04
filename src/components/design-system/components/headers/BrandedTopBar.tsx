import type { ReactNode } from 'react'
import Type from '../../atoms/Type'

export interface BrandedTopBarProps {
  /** The page title, rendered via `Type.Branded.PageTitle`. */
  title: string
  /**
   * Tailwind gradient class applied to the title text
   * (e.g. `'text-gradient-gold'`, `'text-gradient-celestial'`).
   */
  titleGradient?: string
  /** Short description rendered below the title via `Type.BodySmall`. */
  subtitle?: string
  /**
   * Optional trailing content below the title block — typically a
   * `<Notice>` component with a quote or advisory.
   */
  children?: ReactNode
  /** Additional classes merged onto the outer container. */
  className?: string
}

/**
 * Lightweight branded header for index pages that sit atop a
 * `ListDetailLayout`. A Playfair-set gradient title, small subtitle,
 * and an optional Notice or callout below. No count badge, no back
 * link, no actions — the branded register carries the weight.
 *
 * Used by: DoctrineExplorer, EntheogenicGuide.
 *
 * @example
 * <BrandedTopBar
 *   title="Doctrine of Plant Teachings"
 *   titleGradient="text-gradient-gold"
 *   subtitle="What each plant activates within you."
 * >
 *   <Notice tone="info" icon="❝">
 *     Plants activate what is already within us.
 *   </Notice>
 * </BrandedTopBar>
 */
export default function BrandedTopBar({
  title,
  titleGradient,
  subtitle,
  children,
  className,
}: BrandedTopBarProps) {
  const classes = ['px-8 py-6 space-y-4', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div>
        <Type.Branded.PageTitle className={titleGradient}>
          {title}
        </Type.Branded.PageTitle>
        {subtitle && (
          <Type.BodySmall as="p" className="mt-1 text-earth-500">
            {subtitle}
          </Type.BodySmall>
        )}
      </div>
      {children}
    </div>
  )
}
