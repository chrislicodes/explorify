import renderer from "react-test-renderer";
import CardItem from "./index";

describe("<CardItem /> Integration Suite", () => {}); //https://jestjs.io/docs/tutorial-react#dom-testing
// https://jestjs.io/docs/tutorial-react

describe(`<CardItem /> Suite`, () => {
  it("should render <CardItem />", () => {
    const tree = renderer.create(<CardItem />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="CardItem__CardWrapper-sc-13ygdo3-2 jHdbGn"
        // onClick={[Function]}
      >
        <div
          className="CardItem__ImageWrapper-sc-13ygdo3-3 gkxJss"
        >
          <div
            className="PlaceholderImage__PlaceholderWrapper-sc-1wgb6vw-0 NDaeV CardItem__StyledPlaceholderImage-sc-13ygdo3-1"
          >
            <div>
              <svg>
                <use
                  href="sprites.svg#icon-user"
                />
              </svg>
            </div>
          </div>
          <div
            className="CardItem__StyledIcon-sc-13ygdo3-0"
          >
            <svg>
              <use
                href="sprites.svg#icon-notification"
              />
            </svg>
          </div>
        </div>
        <div
          className="CardItem__Info-sc-13ygdo3-6 dcPNRC"
        >
          <div
            className="CardItem__PrimaryInfo-sc-13ygdo3-4 bjGord"
          />
          <div
            className="CardItem__SecondaryInfo-sc-13ygdo3-5 hHKLlV"
          />
        </div>
      </div>
    `);
  });

  it("should call onClickHandler", () => {
    const mock = jest.fn();
    const component = renderer.create(<CardItem onClick={mock} />);

    component.root.props.onClick();
    expect(mock).toBeCalledTimes(1);
  });
});
