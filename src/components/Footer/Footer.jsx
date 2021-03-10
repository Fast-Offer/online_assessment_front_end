import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import classnames from "classnames";
import footerStyle from "./Footer.module.less";

export default function Footer() {
  return (
    <footer
      className={classnames({
        container: true,
        [footerStyle.footer]: true,
      })}
    >
      <div className={footerStyle.antd}>
        <span className={footerStyle.item}>Ant Design Pro</span>
        <span className={footerStyle.item}>
          <GithubOutlined style={{ fontSize: "20px" }} />
        </span>
        <span className={footerStyle.item}>Ant Design</span>
      </div>
      <div className={footerStyle.copyright}>
        Copyright ©2020 Produced by Ant Finance Experience Technology Department
      </div>
    </footer>
  );
}
