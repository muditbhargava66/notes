import { useState } from 'react';
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((component?: QuartzComponent) => {
  if (component) {
    const Component = component;
    function MobileOnly(props: QuartzComponentProps) {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <>
          <button onClick={() => setIsOpen(true)}>
            Open Drawer
          </button>
          <div className={`drawer ${isOpen ? 'open' : ''}`}>
            <Component {...props} />
            <button onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </>
      )
    }

    MobileOnly.displayName = component.displayName
    MobileOnly.afterDOMLoaded = component?.afterDOMLoaded
    MobileOnly.beforeDOMLoaded = component?.beforeDOMLoaded
    MobileOnly.css = component?.css
    return MobileOnly
  } else {
    return () => <></>
  }
}) satisfies QuartzComponentConstructor
