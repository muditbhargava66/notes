import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((component: QuartzComponent) => {
  const Component = component
  const MobileOnly: QuartzComponent = (props: QuartzComponentProps) => {
    return <Component displayClass="mobile-only" {...props} />
  }
}) satisfies QuartzComponentConstructor