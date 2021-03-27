import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // font-awesomeを使用するためのコンポーネント
import { faBars } from "@fortawesome/free-solid-svg-icons"; // 実際に使用するアイコンを指定するコンポーネント
import { colors } from "../../variables";
import Menu from "../molecules/Menu";

const Container = styled.div`
  padding: 0.5rem;
  font-size: 1.2rem;
`;

// importしたFontAwesomeIconを継承してスタイリングを行うことができる
const MenuIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${colors.white};
`;

const DropdownMenu = () => {
  const [isShown, setShown] = useState(false);
  const menuRef = useRef(null); // menuのdivのref hookを作成

  // 初回のレンダリング時のみ実行させた方が無駄に関数生成されなくてメモリ節約になるのでuseEffectを使用
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Menuコンポーネント以外がクリックされたらメニューを閉じる
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShown(false);
      }
    };
    // MenuIcon以外での画面全体のどこかがクリックされるたびに呼ばれる
    // (MenuではstopPropagationを使用してイベント伝播を止めているため)
    document.addEventListener("click", handleClickOutside);
    // アンマウント時にリスナーを削除してメモリに優しく。
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // 依存を空にすることで、初回レンダー時のみこのuseEffectは実行される

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setShown(!isShown);
  };

  return (
    <Container>
      <MenuIcon onClick={handleMenuClick} icon={faBars} />
      {isShown && <Menu ref={menuRef} onClick={handleMenuClick} />}
    </Container>
  );
};

export default DropdownMenu;
