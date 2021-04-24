import React from 'react';
import { PageHeader } from 'antd';
import CountdownTimer from '../CountdownTimer';

// The style rule of the entire header display area
const HEADER_AREA = {
  margin: '20px 16px 10px 16px',
  paddingTop: 15,
  paddingLeft: 55,
  paddingRight: 55,
};

// Antd page routing mechanism
const routes = [
  {
    path: 'Frist actualPATH',
    breadcrumbName: 'Library',
  },
  {
    path: 'Second actualPATH',
    breadcrumbName: '2nd-displayTEXT',
  },
  {
    path: 'Third actualPATH',
    breadcrumbName: '3rd-displayTEXT',
  },
  {
    path: 'Fourth actualPATH',
    breadcrumbName: '4th-displayTEXT',
  },
];

const CustomPageHeader = ({
  h, m, s, page,
}) => {
  // Theme for generating an Error Page
  const ERROR_THEME = (
    <div style={{ display: 'flex', justifyContent: 'stretch' }}>
      <div style={{ width: '80%' }}>
        <span>report any error you find here</span>
      </div>
    </div>
  );

  // Theme for generating a Practice Page
  const PRACTICE_THEME = (
    <div style={{ display: 'flex', justifyContent: 'stretch' }}>
      <div style={{ width: '80%' }}>
        <span>
          { '[1 of ' }
          { 5 }
          { '] '}
        </span>
        Single Choice - You have
        { h > 1 ? ` ${h} hours ` : ' ' }
        { h < 1 && h > 0 ? ` ${h} hour ` : ' '}
        { m > 1 ? `${m} minutes ` : `${m} minute`}
        { s > 1 ? `${s} seconds ` : `${s} second`}
      </div>
      <div style={{
        position: 'relative',
        width: '60%',
        minWidth: '20%',
      }}
      >
        <div style={{
          position: 'absolute',
          bottom: '3px',
          right: '-10px',
        }}
        >
          <CountdownTimer hour={h} min={m} sec={s} />
        </div>
      </div>
    </div>
  );

  // Choose what content to display based on the passed-in 'page' prop
  let activeTheme;

  switch (page) {
    case 'Error':
      activeTheme = ERROR_THEME;
      break;
    case 'Practice':
      activeTheme = PRACTICE_THEME;
      break;
    default:
      return null;
  }

  return (
    <PageHeader
      style={HEADER_AREA}
      ghost={false}
      title={`${page} Page`}
      breakpoint="lg"
      collapsedwidth="700"
      breadcrumb={{ routes }}
    >
      {activeTheme}
    </PageHeader>
  );
};
export default CustomPageHeader;
