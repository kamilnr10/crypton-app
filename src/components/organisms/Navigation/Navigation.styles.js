import styled from 'styled-components';
import { Indicator } from 'components/atoms/Indicator/Indicator';

export const NavWrapper = styled.nav`
  width: 320px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;

  ul {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    a {
      width: 100%;
      height: 100%;
      position: relative;
      font-size: 12px;

      div span:last-child {
        position: absolute;
        letter-spacing: 0.05em;
        transform: translateY(15px);
        transition: 0.5s;
        opacity: 0;
      }

      div {
        width: 100%;
        height: 100%;
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        font-weight: 500;

        span {
          position: relative;
          z-index: 100;

          svg {
            width: 24px;
            height: 24px;
            position: relative;
            display: block;
          }
        }

        span:first-child {
          color: blue;
          position: absolute;
          letter-spacing: 0.05em;
          transition: 0.5s;
        }
      }
    }

    a.active {
      div span:first-child {
        transform: translateY(-100%);
      }

      div span:last-child {
        transform: translateY(10px);
        opacity: 1;
      }
    }

    a:nth-child(1).active ~ ${Indicator} {
      transform: translateX(calc(64px * 0));
    }
    a:nth-child(2).active ~ ${Indicator} {
      transform: translateX(calc(64px * 1));
    }
    a:nth-child(3).active ~ ${Indicator} {
      transform: translateX(calc(64px * 2));
    }
    a:nth-child(4).active ~ ${Indicator} {
      transform: translateX(calc(64px * 3));
    }
    a:nth-child(5).active ~ ${Indicator} {
      transform: translateX(calc(64px * 4));
    }
  }
`;
