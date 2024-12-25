import React from "react";
import "./blog_details.scss";
import { FaRegComment, FaRegFolderOpen, FaRegUser } from "react-icons/fa";
const Blog_details = () => {
  return (
    <div className="blog-detail-parent parent">
      <div className="blog-detail-cont container">
        <div className="left">
          <div className="blog-image">
            <div className="date">
              25 <span>NOV</span>
            </div>
          </div>
          <div className="category-box">
            <div className="left-c">
              <div className="icon"><FaRegUser /></div>
              <div className="titlen">admin</div>
            </div>
            <div className="middle">
              
              {" "}
              <div className="icon"><FaRegFolderOpen /></div>
              <div className="titlen">admin</div>
            </div>
            <div className="right-c">
              {" "}
              <div className="icon"> <FaRegComment /></div>
              <div className="titlen">admin</div>
            </div>
          </div>
          <div className="title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum, eligendi?
          </div>
          <div className="blog-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, excepturi deleniti facere vel sapiente nobis molestiae consequuntur error voluptate labore quae dolorum nemo quasi aliquid dignissimos molestias quas quidem quia. Adipisci culpa earum excepturi molestias sint temporibus, natus maiores aliquam corporis vitae, illum, a animi nisi enim fugiat? Sed voluptatem hic harum culpa impedit, possimus alias sit quod tenetur quas nobis sunt voluptas ea rerum in iusto reiciendis velit earum perspiciatis veniam ipsum autem. Nesciunt temporibus error expedita voluptatem nam, est soluta saepe distinctio minus consequatur officia nobis hic velit ut, accusantium reprehenderit ratione eveniet accusamus ipsum voluptates eligendi cupiditate modi! Delectus, tempora amet. Necessitatibus cupiditate soluta asperiores, minus repellendus, repudiandae neque voluptatibus doloremque eius corrupti, reiciendis pariatur libero consectetur? Sapiente inventore quia, ab amet fugit deleniti eveniet accusantium eaque obcaecati voluptas beatae aspernatur vel maiores reprehenderit modi. Obcaecati tempora, ipsam delectus soluta ipsa ex quis magnam tenetur error cupiditate maxime voluptate porro repellat suscipit repudiandae accusantium. Dolorem voluptate, voluptates fugit iste praesentium tempore delectus rem id, possimus, nobis expedita repellendus adipisci reprehenderit totam eveniet natus. Iste perferendis, delectus eum esse in eveniet praesentium molestiae cupiditate velit debitis accusamus id magnam quasi enim fugiat cumque consequatur facere consequuntur possimus voluptatem ipsum voluptas dicta asperiores laboriosam. Similique blanditiis eaque illum sed, velit enim accusantium excepturi eos praesentium nostrum iste veritatis iure quibusdam quidem dolorem consequatur et reprehenderit corrupti natus iusto! Eligendi saepe a porro officia neque. Odit eius doloribus sequi voluptatem. Error expedita repellat voluptatem adipisci voluptates id itaque sit ratione!</div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Blog_details;
