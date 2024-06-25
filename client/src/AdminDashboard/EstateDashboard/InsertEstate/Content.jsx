import "../../layout/Content/Content.css";
import ContentTop from "../../Components/ContentTop/ContentTop";
import ContentMain from "./ContentMain";

const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
      <ContentMain />
    </div>
  )
}

export default Content