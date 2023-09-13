import * as S from "./sideMenuTemplate.styles";
import MainContentSection from "@/components/organisms/MainContentSection";
import HeaderNav from "@/components/organisms/HeaderNav";
import SideMenuSection from "@/components/organisms/SideMenuList";

interface MainProps {
  children?: React.ReactElement;
}

export const SideMenuTemplate = ({ children }: MainProps) => {
  return (
    <S.SideMenuTemplate>
      <HeaderNav />
      <SideMenuSection />
      <MainContentSection>{children}</MainContentSection>
    </S.SideMenuTemplate>
  );
};
