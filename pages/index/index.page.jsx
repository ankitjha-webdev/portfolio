import App from './App';
import './index.css';
import { pageMetaProps } from './pageMetaProps'; // Import documentProps here
// eslint-disable-next-line react-refresh/only-export-components
export { Page, documentProps }

const documentProps = {
  title: pageMetaProps.title,
  description: pageMetaProps.description
}

function Page() {
  return (
    <App />
  )
}
