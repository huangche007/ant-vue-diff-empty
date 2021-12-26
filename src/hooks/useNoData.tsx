/**
 *
 * @param tip 空数据状态下展示的文案
 * @param flag 各种空状态标识，0为数据空、1为搜索数据空.....
 * @returns
 */
export default function(tip = "暂无数据", flag = 0) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  let img: any = require("@/assets/images/noData/no-data-icon.png");
  switch (flag) {
    case 1: //示例代码
      img = require("@/assets/images/noData/no-data.png");
      break;
  }
  const locale = {
    emptyText: (
      <div class="no-data-warpper">
        <img src={img} class="no-data-icon" />
        <p>{tip}</p>
      </div>
    )
  };
  return {
    locale
  };
}
