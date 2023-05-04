import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane';

type CompoundedType = typeof SplitPane & {
  Pane: typeof Pane;
}
const MySplitPane = SplitPane as CompoundedType;
MySplitPane.Pane = Pane

export default MySplitPane;
