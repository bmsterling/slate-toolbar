// @flow
import styled from "styled-components";

export default styled.div`
  .slateToolbar {
    position: absolute;
    z-index: 100000;
    margin-top: -6px;
    color: #bbb;
    cursor: auto;
    border-radius: 5px;
    background-image: linear-gradient(180deg, #464646, #151515);
  }
  .slateToolbar:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-top-color: #151515;
    border-width: 5px;
    margin-left: -5px;
  }
  .slateToolbar .slateToolbarItem {
    cursor: pointer;
    display: inline-block;
    padding: 3px 5px;
  }

  .slateToolbarItem,
  .slateToolbarItemActive {
    height: 30px;
    width: 30px;
  }

  .slateToolbarItems {
    display: block;

    .item,
    .divider {
      display: inline-block;
    }
  }

  .divider {
    height: 30px;
    width: 10px;
  }

  .qlStroke {
    stroke: #bbb;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1px;
  }

  .qlStrokeActive {
    stroke: #fff;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
  }

  .qlStrokeMitter {
    stroke: #bbb;
    fill: transparent;
  }

  .qlStrokeMitterActive {
    stroke: #fff;
    fill: transparent;
  }

  .qlFill {
    fill: #bbb;
  }

  .qlFillActive {
    fill: #fff;
  }

  .qlEven {
    stroke: #bbb;
    fill: #464646;
  }

  .qlEvenActive {
    stroke: #fff;
    fill: #464646;
  }

  .qlColorLabel {
    fill: #464646;
    opacity: 0.2;
  }

  .qlTransparent {
    opacity: 0.2;
  }

  .qlThin {
    stroke: #bbb;
    fill: transparent;
    stroke-width: 1;
  }

  .qlThinActive {
    stroke: #fff;
    fill: transparent;
    stroke-width: 1;
  }
`;
