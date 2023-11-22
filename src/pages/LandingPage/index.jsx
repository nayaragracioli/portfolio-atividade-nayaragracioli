import { AboutMeSection } from "../../components/AboutMeSection"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { InicialSection } from "../../components/InicialSection"
import { ProjectsSection } from "../../components/ProjectsSection"
import { TechnologiesSection } from "../../components/TechnologiesSection"

export const LandingPage = () => {
    return <>
        <DefaultTemplate>
            <InicialSection />
            <AboutMeSection />
            <TechnologiesSection />
            <ProjectsSection />
        </DefaultTemplate>
    </>
}