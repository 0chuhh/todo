import { Todo } from "components/modules/todo";
import { PageContainer } from "components/ui/page-container";

export const MainPage = () => {
    return (
        <PageContainer title="todos">
            <Todo/>
        </PageContainer>
    )
}