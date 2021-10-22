import { client } from "../../lib/sanity/client";
import styled from "styled-components";
import { postQuery } from "../../lib/sanity/postQuery";
import BlockContent from "@sanity/block-content-to-react";
import Header from "../../comps/header";

const ContainerUI = styled.div`
  position: relative;
  display: flex;
  margin: 200px 0 0 0;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #484349;
  font-family: "Poppins", sans-serif;
`;
const HeaderUI = styled.div`
  position: relative;
  margin: 0 0 0 0;
  color: #484349;
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin: 0 0 50px 0;
`;

const TimelineUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const PostUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 50px 0;
`;

const TitleUI = styled.div`
  position: relative;
  margin: 0 0 0 0;
  color: #484349;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
`;

const Progress = ({ posts }) => {
  const sortedPosts = posts.sort(function (a, b) {
    return new Date(a.publishedAt) - new Date(b.publishedAt);
  });

  return (
    <>
      <ContainerUI>
        <TimelineUI>
          <HeaderUI>Our Weekly Progress</HeaderUI>
          {sortedPosts &&
            sortedPosts.map((post) => (
                <PostUI key={post.title}>
                  <TitleUI>{post.title}</TitleUI>
                  <BlockContent blocks={post?.body} />
                </PostUI>
            ))}
        </TimelineUI>
      </ContainerUI>
    </>
  );
};

export default Progress;

export async function getStaticProps({ params }) {
  const posts = await client.fetch(postQuery);

  return {
    props: {
      posts,
    },
  };
}
