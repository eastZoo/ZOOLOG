import MainTemplate from "@/components/templates/MainTemplate";
import SideMenuLayout from "@/components/templates/SideMenuLayout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <SideMenuLayout>
      <MainTemplate />
    </SideMenuLayout>
  );
}
