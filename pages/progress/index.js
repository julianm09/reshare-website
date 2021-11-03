import { client } from "../../lib/sanity/client";
import styled from "styled-components";
import { postQuery } from "../../lib/sanity/postQuery";
import BlockContent from "@sanity/block-content-to-react";
import Header from "../../comps/header";

const ContainerUI = styled.div`
  position: relative;
  display: flex;
  margin: 50vh 0 0 0;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #484349;
  font-family: "Poppins", sans-serif;

  width: 80%;
`;
const HeaderUI = styled.div`
  position: relative;
  margin: 0 0 0 0;
  color: white;

  font-size: calc(36px + 2.5vw);
  font-family: Poppins;
  margin: 0 0 150px 0;
`;

const TimelineUI = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 100px;
  margin: 0 0 100px 0;

  @media (max-width: 1600px) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 2fr;
  }
`;

const PostUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background: #ee9837;
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 10px;
background: #ee9837;
box-shadow:  20px 20px 60px #d68932,
             -20px -20px 60px #ffa73d;

  font-family: "Poppins", sans-serif;
  padding: 50px;
`;

const TitleUI = styled.div`
  position: relative;
  margin: 0 0 0 0;

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
        <HeaderUI>Our Weekly Progress</HeaderUI>
        <TimelineUI>
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
