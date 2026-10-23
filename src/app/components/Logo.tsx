import { assetPath } from '@/utils/assetPath'

interface LogoProps {
  className?: string
}

/**
 * Cursive "Raihan" wordmark. The SVG is used as a CSS mask and filled with
 * the theme-aware primary token, so it stays a single solid color that is
 * readable in both light and dark themes.
 */
export default function Logo({ className = '' }: LogoProps) {
  const url = `url(${assetPath('/logo-cursive.svg')})`
  return (
    <span
      aria-hidden="true"
      className={`block aspect-[3/1] bg-primary ${className}`}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  )
}
