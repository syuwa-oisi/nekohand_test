import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

class DropdownMenu extends React.Component {
    render() {
        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <a
              href=""
              ref={ref}
              style={{ color: "black" }}
              onClick={(e) => {
                e.preventDefault();
                onClick(e);
              }}
            >
              {children}
            </a>
          ));
          
          return (
            <div>
                <Dropdown.Menu renderOnMount >
                    <Dropdown.Header>Dropdown header</Dropdown.Header>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                </Dropdown.Menu>
            </div>
          );
        }
    }
  export default DropdownMenu;