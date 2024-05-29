import { Container, Markdown } from "~/components";
import { RichTextCms } from "./RichText.types";

export function RichText({ cms }: { cms: RichTextCms }) {
  const { content } = cms;

  return (
    <Container container={cms.container}>
      <div className="pxcontained py-contained">
        {content && <Markdown>{content}</Markdown>}
      </div>
    </Container>
  )
}