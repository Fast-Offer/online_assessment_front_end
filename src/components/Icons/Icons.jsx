import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import iconStyles from "./Icons.module.less";

export default function Icons() {
  return (
    <div className={iconStyles.quickSignIn}>
      <div className={iconStyles.quickSignInText}>Quick Sign-in:</div>
      <div>
        <GithubOutlined
          className={iconStyles.icons}
          style={{ color: "rgba(0, 0, 0, 0.85)", fontSize: "20px" }}
        />
        <LinkedinOutlined
          className={iconStyles.icons}
          style={{ color: "rgba(0, 0, 0, 0.85)", fontSize: "20px" }}
        />
        <WechatOutlined
          className={iconStyles.icons}
          style={{ color: "rgba(0, 0, 0, 0.85)", fontSize: "20px" }}
        />
      </div>
      <div>
        <a className={iconStyles.signUp} href="signup">
          Sign Up
        </a>
      </div>
    </div>
  );
}
