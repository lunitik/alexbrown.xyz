import { Suspense, lazy } from "react";
import Loading from "../../components/Loading/Loading";
import { Seo } from "../../components/SEO/SEO";
const RockPaperScissorsGame = lazy(() => import("../../components/RockPaperScissorsGame/RockPaperScissorsGame"));

function RockPaperScissors() {
    return (
        <Suspense fallback={<Loading />}>
            <Seo pageKey="game" />            
            <RockPaperScissorsGame />
        </Suspense>
    )
}

export default RockPaperScissors;