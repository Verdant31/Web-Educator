//Components
import { Header } from '../../components/DashboardAccess/Header';
import { HighSchoolContent } from '../../components/High&MiddleSchool/High&MiddleSchoolContent';

export default function HighSchool() {
    return(
        <>
            <Header urlRedirect='/DashboardAccess'/>
            <HighSchoolContent />
        </>
    )
}
