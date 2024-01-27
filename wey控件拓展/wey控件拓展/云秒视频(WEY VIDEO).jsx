const types = {
  isInvisibleWidget: false,
  type: "URLK_TIAN_WIDGET",
  icon: "https://static.codemao.cn/coco/player/unstable/S12AF5bwh.image/png?hash=Fn5byv-bBIIuo6K8HF4Bs5CwLX6n",
  title: "云秒视频(WEY VIDEO)",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "__width",
      label: "宽度",
      valueType: "number",
      defaultValue: 300,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: "__height",
      label: "高度",
      valueType: "number",
      defaultValue: 500,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: "__size",
      label: "",
      valueType: "number",
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ["__height", "__width"],
        },
        getter: {
          keys: ["__height", "__width"],
        },
      },
    },
  ],
  methods: [],
  events: [],
};

types["properties"].push({
  key: "url",
  label: "wey链接",
  valueType: "string",
  defaultValue: "https://coco.codemao.cn/editor/player/185966631?channel=h5",
});

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.widgetLog("刘时安出品");
    this.url = props.url;
  }
  render() {
    return React.createElement(
      "iframe",
      { loading: "lazy", src: this.url, width: "100%", height: "100%",style: {  border: 'none', }, },
      []
    );
  }
}

exports.types = types;
exports.widget = Widget;
