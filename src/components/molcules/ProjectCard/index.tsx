import { Col } from "react-bootstrap";
import projImg1 from "@/styles/assets/images/project-img1.png";
import Link from "next/link";

export const ProjectCard = ({ id, title, description, imgUrl }: any) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link href={`/post/${id}`}>
        <div className="proj-imgbx">
          <img src={projImg1.src} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            {/* <span>{description}</span> */}
          </div>
        </div>
      </Link>
    </Col>
  );
};
