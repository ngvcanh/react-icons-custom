# react-icons-custom
Custom of package React-Icons

## Installation

```
npm i --save @kensoni/react-icons
```

## Using

```jsx
import Icons from '@kensoni/react-icons';

...
  <Icons.Icon Icon={ Icons.DiGoogleCloudPlatform } />
...

```

## Icons support

Please get icons at here: [React Icons](https://react-icons.github.io/react-icons)

## Alias react-icons

```jsx
import Icons, {   // Icons is object contains Component alias and all icons of react-icons
  Context,        // Alias of IconContext,
  IconTree,       // IconTree of react-icons
  GenIcon,        // GenIcon of react-icons
  IconBaseProps,  // IconBaseProps of react-icons
  IconBase,       // IconBase of react-icons
  IconType,       // IconType of react-icons
  IconManifest    // IconManifest of react-icons
} from '@kensoni/react-icons';
```

```jsx
// IAiIcon:   interface contains properties of react-icons/ai
// AiIcon:    Object contains all icons of react-icons/ai
import { IAiIcon, AiIcon } from '@kensoni/react-icons/dist/esm/AiIcon'; 
```

Use the same for other icons of react-icons