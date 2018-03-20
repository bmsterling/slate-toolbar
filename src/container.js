// @flow
import styled from "styled-components";

export default styled.div`
  .slateToolbar {
    position: absolute;
    z-index: 1000;
    margin-top: -6px;
    color: #fff;
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
    padding: 3px;
    font-size: 14px;
  }

  .slateToolbarItem,
  .slateToolbarItemActive {
    width: 30px;
    height: 30px;
  }

  .slateToolbar .slateToolbarItem.separated {
    border-left: 1px solid rgba(255, 255, 255, 0.25);
  }

  [data-block-active="true"] {
    outline: 3px solid black;
  }

  .slateToolbarSection {
    display: inline-block;
  }

  .slateToolbarBlockSection,
  .slateToolbarMarkSection {
    display: block;
  }

  .qlStroke {
    stroke: #fff;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1px;
  }

  .qlStrokeActive {
    stroke: #f97d5a;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
  }

  .qlStrokeMitter {
    stroke: #fff;
    fill: transparent;
  }

  .qlStrokeMitterActive {
    stroke: #f97d5a;
    fill: transparent;
  }

  .qlFill {
    fill: #fff;
  }

  .qlFillActive {
    fill: #f97d5a;
  }

  .qlEven {
    stroke: #fff;
    fill: #151515;
  }

  .qlEvenActive {
    stroke: #f97d5a;
    fill: #151515;
  }

  .qlColorLabel {
    fill: #000;
    opacity: 0.2;
  }

  .qlTransparent {
    opacity: 0.2;
  }

  .qlThin {
    stroke: #fff;
    fill: transparent;
    stroke-width: 1;
  }

  .qlThinActive {
    stroke: #f97d5a;
    fill: transparent;
    stroke-width: 1;
  }
`;
