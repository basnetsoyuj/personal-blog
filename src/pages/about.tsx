import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About | SJB Blogs</title>
      <meta name="description" content="A Personal Blogging Site. Hey! I am Soyuj Jung Basnet. I'm fascinated by Mathematics, Computer Science, and Physics. I want to explore how and why things work the way they do. This website was created to help me do exactly that. By penning down my thoughts, experiences, and point of view on various technical and non-technical areas, I wish to understand things better, explain them clearly, and ultimately be a better problem solver." />
      <meta property="og:site_name" content="About - SJB Blogs" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About - SJB Blogs" />
      <meta property="og:description" content="A Personal Blogging Site. Hey! I am Soyuj Jung Basnet. I'm fascinated by Mathematics, Computer Science, and Physics. I want to explore how and why things work the way they do. This website was created to help me do exactly that. By penning down my thoughts, experiences, and point of view on various technical and non-technical areas, I wish to understand things better, explain them clearly, and ultimately be a better problem solver." />
      <meta property="og:url" content={config.siteUrl+'/about'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About - SJB Blogs" />
      <meta name="twitter:description" content="A Personal Blogging Site. Hey! I am Soyuj Jung Basnet. I'm fascinated by Mathematics, Computer Science, and Physics. I want to explore how and why things work the way they do. This website was created to help me do exactly that. By penning down my thoughts, experiences, and point of view on various technical and non-technical areas, I wish to understand things better, explain them clearly, and ultimately be a better problem solver." />
      <meta name="twitter:url" content={config.siteUrl+'/about'} />
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  A Personal Blogging Site
                </h5>
                <p>
                Hey! I'm Soyuj Jung Basnet. I'm fascinated by Mathematics, Computer Science, and Physics. I want to explore how and why things work the way they do. This website was created to help me do exactly that. By penning down my thoughts, experiences, and point of view on various technical and non-technical areas, I wish to understand things better, explain them clearly, and ultimately be a better problem solver.
                </p>
                <p>Enjoy my blogs!</p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
