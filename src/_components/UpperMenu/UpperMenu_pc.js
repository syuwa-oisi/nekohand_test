import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './UpperMenu.css';

class UpperMenu extends React.Component {
    render() {
      return (
        <div className='header'>
          <div>
            <Navbar bg="light" expand="lg">
                    <Container className='UpperMenu'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" class="navbar-collapse justify-content-around" >
                            <NavDropdown title='カード' id="basic-nav-dropdown">
                                <NavDropdown.Item href="/CardSearch">カード検索</NavDropdown.Item>
                                <NavDropdown.Item href="/CardView">閲覧数ランキング</NavDropdown.Item>
                                <NavDropdown.Item href="/CardPrice">価格変動ランキング</NavDropdown.Item>
                                <NavDropdown.Item href="/CardList">カード一覧</NavDropdown.Item>
                                <NavDropdown.Item href="/CardReccomend">支援者オススメカード</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="デッキ" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/DeckSearch">デッキ検索</NavDropdown.Item>
                                <NavDropdown.Item href="/DeckView">閲覧数ランキング</NavDropdown.Item>
                                <NavDropdown.Item href="/DeckList">デッキリスト</NavDropdown.Item>
                                <NavDropdown.Item href="/DeckMake">デッキ作成</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="サプライ" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">サプライ検索</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">閲覧数ランキング</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">価格変動ランキング</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">サプライリスト</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="アカウント" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">マイページ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">お気に入り</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">アカウント情報</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">アカウント設定</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="その他" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">お問い合わせ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">リンク集</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
          </div>  
        </div>
      );
    }
  }
  
  export default UpperMenu;