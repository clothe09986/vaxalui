import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import ImageContainer from 'library/saya/ImageContainer';
import Card from 'library/saya/Card';
import TitleLineBox from 'library/saya/Rick/TitleLineBox';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';


import MobileLayout from '../../shared/MobileLayout';

import MobileBg1 from '../../img/mobile/m_bg52.jpg'
import articlePic1 from '../../img/mobile/m_pic1.jpg';
import articlePic2 from '../../img/mobile/m_pic2.jpg';
import articlePic3 from '../../img/mobile/m_pic3.jpg';
import articlePic4 from '../../img/mobile/m_pic4.jpg';
import leftBox from '../../img/mobile/m_bg40.jpg';
import rightBox from '../../img/mobile/m_bg67.jpg';


storiesOf('saya|Pages/Mobile/MobileAbout', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('News',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="ABOUT"
            secondTitle={'News'}
            thirdTitle={'The Keywords of SAYA'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={148}
            secondLineMarginTop={138}
            color="#ffffff"
            lineBackgroundColor="#ffffff"
          />

          <ImageContainer
            style={{
              height: 1823,
            }}
          >
            <div
              style={{
                fontFamily: 'FilsonSoftRegular',
                fontSize: 14,
                paddingTop: 40,
                paddingBottom: 20,
              }}
            >
              About /
            <span style={{ fontFamily: 'FilsonSoft-Bold', }}>
                News
           </span>
            </div>
            <Card
              title="What is Post-consumer Recycled Polyester"
              description="Recycled polyester (rPET) is obtained by melting down existing plastic and re-spinning it into new polyester fiber."
              image={articlePic1}
              width={310}
              height={270}
            />
            <Card
              title="Recycled vs. Recyclable"
              description="Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash..."
              image={articlePic2}
              width={310}
              height={270}
            />
            <Card
              title="Mechanical Recycling"
              description='Mechanical recycling transforms materials into "new" secondary raw materials without changing the base...'
              image={articlePic3}
              width={310}
              height={270}
            />
            <Card
              title="Chemical Recycling"
              description="Chemical recycling, also called advanced recycling,  is taking  plastic waste  and reducing it back to its..."
              image={articlePic4}
              width={310}
              height={270}
            />
          </ImageContainer>

          <TitleLineBox
            title="About SAYA"
            backgroundColor="#e5e5e5"
            color="#000000"
          >
            <ImageBoxSmall
              title={'About\nSAYA'}
              backgroundImage={leftBox}
              paddingTop={53}
              fontColor="#000000"
            />
            <ImageBoxSmall
              title={'Media\n&\nDownloads'}
              backgroundImage={rightBox}
              paddingTop={35}
              fontColor="#ffffff"
            />
          </TitleLineBox>

        </MobileLayout>
      </div>
    )
  );