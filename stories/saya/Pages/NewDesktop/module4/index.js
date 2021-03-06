import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection2 from 'library/saya/bob/TopSection2';
import AboutNews from 'library/saya/bob/AboutNews';
import TechnologyProjects from 'library/saya/bob/TechnologyProjects';

import Layout from '../../../shared/Layout';

import background_TopSection from '../../../img/banner12.jpg';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Module4',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection2
            firstTitle={
              <>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>ABOUT</span>
              </>
            }
            secondTitle="News"
            backgroundImage={background_TopSection}
          />
          <AboutNews
            backgroundColor="#FFFFFF"
            title={
              <>
                <span style={{ fontSize: 14, fontFamily: 'FilsonSoftRegular', fontWeight: 300 }}>About /</span>
                <span style={{ fontSize: 14, fontFamily: 'FilsonSoft-Bold' }}>
                  News
                </span>
              </>
            }
            item={[
              {
                height: 290,
                width: 300,
                title: 'Recycled vs. Recyclable',
                description: 'Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash...',
                image: background_TopSection,
                onClick: () => {}
              },
              {
                height: 290,
                width: 300,
                title: 'Recycled vs. Recyclable',
                description: 'Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash...',
                image: background_TopSection,
                onClick: () => {}
              },
              {
                height: 290,
                width: 300,
                title: 'Recycled vs. Recyclable',
                description: 'Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash...',
                image: background_TopSection,
                onClick: () => {}
              },
              {
                height: 290,
                width: 300,
                title: 'Recycled vs. Recyclable',
                description: 'Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash...',
                image: background_TopSection,
                onClick: () => {}
              }
            ]}
          />
          <TechnologyProjects
            title="More About SAYA"
            backgroundColor="#e3e3e3"
            list={[
              {
                title: "Renewed Fiber is the Name of the Game",
                buttonText: "Learn More",
                disabled: false,
                type: <span>SAYA</span>,
              },
              {
                title: "Backbone of our sustainable textile business",
                buttonText: "Learn More",
                disabled: false,
                type: '',
              },
            ]}
          />
        </Layout>
      </div>
    )
  );