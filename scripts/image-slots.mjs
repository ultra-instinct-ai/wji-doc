// 图片位定义。每一项会被插入到 5 个语言的同一位置。
// after: 'top' = frontmatter 后首段之后；数字 N = 第 N 个 '## ' 标题之后（0 起算）。
// caption / alt 需要 5 个语言；不得包含双引号。shot 只写英文，给拍摄者看。

const L = (en, zh, ja, ko, vi) => ({ en, 'zh-Hant': zh, ja, ko, vi })

export const SLOTS = [
  // ── Infinite Canvas ────────────────────────────────────────────────────────
  {
    page: 'infinite-canvas/overview', after: 1,
    file: 'infinite-canvas/chrome-01',
    caption: L(
      'The canvas chrome: capsule toolbar, top bar, and viewport control bar',
      '畫布的介面元件：膠囊工具列、頂欄與視口控制列',
      'キャンバスの各バー: カプセルツールバー、上部バー、ビューポート操作バー',
      '캔버스 구성 요소: 캡슐 툴바, 상단 바, 뷰포트 제어 바',
      'Các thanh của canvas: thanh dạng viên, thanh trên cùng và thanh điều khiển khung nhìn'),
    alt: L(
      'Canvas with the capsule toolbar on the left, top bar above, and viewport control bar bottom left highlighted',
      '畫布上標出左側膠囊工具列、上方頂欄與左下視口控制列',
      '左のカプセルツールバー、上部バー、左下のビューポート操作バーを示したキャンバス',
      '왼쪽 캡슐 툴바, 위쪽 상단 바, 왼쪽 아래 뷰포트 제어 바를 표시한 캔버스',
      'Canvas với thanh dạng viên bên trái, thanh trên cùng phía trên và thanh điều khiển khung nhìn dưới trái'),
    shot: `Screen: a canvas with a few nodes, nothing selected
Must show: the whole viewport so all three chrome areas are visible at once
State: no panels open, zoom near 100%
UI language: English
Size: >= 1600x1000
Anonymize: generic canvas name`,
  },
  {
    page: 'infinite-canvas/navigate-the-canvas', after: 0,
    file: 'infinite-canvas/viewport-bar-01',
    caption: L(
      'The viewport control bar',
      '視口控制列',
      'ビューポート操作バー',
      '뷰포트 제어 바',
      'Thanh điều khiển khung nhìn'),
    alt: L(
      'Viewport control bar showing undo, redo, zoom out, zoom percentage, zoom in, fit, minimap toggle, and performance mode',
      '視口控制列，含撤回、前進、縮小、縮放百分比、放大、適應、小地圖切換與效能模式',
      '元に戻す、やり直し、縮小、倍率、拡大、全体表示、ミニマップ切替、パフォーマンスモードを並べたビューポート操作バー',
      '실행 취소, 다시 실행, 축소, 배율, 확대, 맞춤, 미니맵 전환, 성능 모드가 있는 뷰포트 제어 바',
      'Thanh điều khiển khung nhìn với hoàn tác, làm lại, thu nhỏ, tỷ lệ, phóng to, vừa khung, bật tắt bản đồ thu nhỏ và chế độ hiệu năng'),
    shot: `Screen: close crop of the viewport control bar, bottom left of the canvas
Must show: every button, and the zoom percentage reading a non-round value such as 87%
State: standard performance mode, minimap off
UI language: English
Size: >= 900x220, cropped tight
Anonymize: none needed`,
  },
  {
    page: 'infinite-canvas/navigate-the-canvas', after: 3,
    file: 'infinite-canvas/minimap-01',
    caption: L(
      'The minimap, colored by node tag',
      '小地圖，依節點標籤上色',
      'ノードのタグ色で塗られたミニマップ',
      '노드 태그 색으로 칠해진 미니맵',
      'Bản đồ thu nhỏ, tô màu theo nhãn của nút'),
    alt: L(
      'Minimap in the corner of the canvas showing node positions in several tag colors',
      '畫布角落的小地圖，以數種標籤顏色顯示節點位置',
      'キャンバスの隅で、複数のタグ色でノード位置を示すミニマップ',
      '캔버스 모서리에서 여러 태그 색으로 노드 위치를 보여 주는 미니맵',
      'Bản đồ thu nhỏ ở góc canvas hiển thị vị trí các nút theo nhiều màu nhãn'),
    shot: `Screen: the minimap open, cropped to itself plus a little surrounding canvas
Must show: at least three different tag colors so the color mapping is obvious
State: a canvas with 15 or more nodes so the map has something to show
UI language: English
Size: >= 800x600
Anonymize: none needed`,
  },
  {
    page: 'infinite-canvas/create-nodes', after: 0,
    file: 'infinite-canvas/create-panel-01',
    caption: L(
      'The create panel',
      '創建面板',
      '作成パネル',
      '만들기 패널',
      'Khung tạo'),
    alt: L(
      'Create panel listing every node type available to place on the canvas',
      '創建面板，列出可放上畫布的每一種節點類型',
      'キャンバスに置けるノード種別をすべて並べた作成パネル',
      '캔버스에 놓을 수 있는 모든 노드 종류를 나열한 만들기 패널',
      'Khung tạo liệt kê mọi loại nút có thể đặt lên canvas'),
    shot: `Screen: the create panel opened from the first capsule toolbar icon
Must show: the full list of node types, and the Annotation grouping
State: nothing selected on the canvas behind it
UI language: English
Size: >= 1000x900`,
  },
  {
    page: 'infinite-canvas/create-nodes', after: 1,
    file: 'infinite-canvas/create-menu-01',
    caption: L(
      'The create menu, opened by double-clicking empty space',
      '雙擊空白處開啟的建立選單',
      '空いている場所をダブルクリックして開いた作成メニュー',
      '빈 곳을 더블클릭해 연 만들기 메뉴',
      'Menu tạo, mở bằng cách nhấp đúp vào chỗ trống'),
    alt: L(
      'Context menu on the canvas listing media node types above a divider and an Annotation submenu below',
      '畫布上的選單，分隔線上方是媒體節點類型，下方是標註子選單',
      'キャンバス上のメニュー。区切り線の上にメディア種別、下に注釈のサブメニュー',
      '캔버스의 메뉴로, 구분선 위에 미디어 종류가, 아래에 주석 하위 메뉴가 있음',
      'Menu trên canvas liệt kê các loại nút nội dung phía trên đường ngăn và menu con Chú thích phía dưới'),
    shot: `Screen: the double-click create menu open on empty canvas
Must show: the media type list, the divider, and the Annotation submenu expanded
State: menu opened over empty space, existing nodes visible behind
UI language: English
Size: >= 1000x900`,
  },
  {
    page: 'infinite-canvas/node-types', after: 'top',
    file: 'infinite-canvas/node-gallery-01',
    caption: L(
      'Several node types on one canvas',
      '同一張畫布上的數種節點',
      '1 枚のキャンバス上のさまざまなノード',
      '한 캔버스에 놓인 여러 노드 종류',
      'Nhiều loại nút trên cùng một canvas'),
    alt: L(
      'Canvas showing image, video, text, table, dataset, group, and annotation nodes side by side',
      '畫布上並排放著圖片、視頻、文本、表格、數據集、分組與標註節點',
      '画像、動画、テキスト、表、データセット、グループ、注釈の各ノードを並べたキャンバス',
      '이미지, 비디오, 텍스트, 표, 데이터셋, 그룹, 주석 노드를 나란히 놓은 캔버스',
      'Canvas hiển thị các nút ảnh, video, văn bản, bảng, dataset, nhóm và chú thích cạnh nhau'),
    shot: `Screen: a canvas laid out as a reference sheet of node types
Must show: at least image, video, text, table, dataset, group, and one annotation node, each with its name label visible
State: nothing selected, arranged in a readable grid
UI language: English
Size: >= 1800x1100
Anonymize: no real people in the images`,
  },
  {
    page: 'infinite-canvas/work-with-nodes', after: 4,
    file: 'infinite-canvas/multi-select-toolbar-01',
    caption: L(
      'The multi-select toolbar',
      '多選工具列',
      '複数選択ツールバー',
      '다중 선택 툴바',
      'Thanh công cụ chọn nhiều'),
    alt: L(
      'Multi-select toolbar with color tag, align, group, add reference, model settings, improve prompt, submit, and download buttons',
      '多選工具列，含顏色標籤、對齊、群組、添加引用、模型設置、優化提示詞、批量提交與下載按鈕',
      'カラータグ、整列、グループ化、参照追加、モデル設定、プロンプト最適化、一括送信、ダウンロードの各ボタンを備えた複数選択ツールバー',
      '색상 태그, 정렬, 그룹화, 참조 추가, 모델 설정, 프롬프트 최적화, 일괄 제출, 다운로드 버튼이 있는 다중 선택 툴바',
      'Thanh công cụ chọn nhiều với các nút nhãn màu, căn chỉnh, nhóm, thêm tham chiếu, thiết lập mô hình, tối ưu câu lệnh, gửi hàng loạt và tải xuống'),
    shot: `Screen: the multi-select toolbar as it slides up from the bottom
Must show: every button in the bar, and the option-key fan-out badge on the right
State: three or more generation nodes selected so all buttons are enabled
UI language: English
Size: >= 1400x400, cropped to the toolbar plus a little canvas above it`,
  },
  {
    page: 'infinite-canvas/work-with-nodes', after: 6,
    file: 'infinite-canvas/color-tag-popover-01',
    caption: L(
      'The color tag popover, with tags named',
      '顏色標籤浮層，標籤已命名',
      'タグに名前を付けたカラータグのポップオーバー',
      '태그에 이름을 붙인 색상 태그 팝오버',
      'Khung nhãn màu, với các nhãn đã đặt tên'),
    alt: L(
      'Color tag popover showing eight colors with editable names and a clear tag option',
      '顏色標籤浮層，顯示八種顏色與可編輯的名稱，以及清除標籤選項',
      '8 色と編集可能な名前、タグを消す項目を並べたカラータグのポップオーバー',
      '여덟 색과 편집 가능한 이름, 태그 지우기 항목이 있는 색상 태그 팝오버',
      'Khung nhãn màu hiển thị tám màu với tên có thể sửa và tùy chọn xóa nhãn'),
    shot: `Screen: the color tag popover open from the multi-select toolbar
Must show: all eight colors, at least three with meaningful names such as approved / needs revision / client-visible
State: one color currently applied to the selection
UI language: English
Size: >= 900x800`,
  },
  {
    page: 'infinite-canvas/connections-and-references', after: 0,
    file: 'infinite-canvas/connection-handles-01',
    caption: L(
      'Dragging from a connection handle',
      '從連接手柄拖出連線',
      '接続ハンドルからドラッグしているところ',
      '연결 핸들에서 끌고 있는 모습',
      'Đang kéo từ một tay nắm kết nối'),
    alt: L(
      'A node with plus handles on both sides and a connection line being dragged toward a generation node',
      '節點兩側各有一個加號手柄，一條連線正被拖向生成節點',
      '両側にプラスのハンドルを持つノードから、生成ノードへ接続線がドラッグされている様子',
      '양옆에 더하기 핸들이 있는 노드에서 생성 노드로 연결선을 끌고 있는 모습',
      'Một nút có tay nắm dấu cộng ở hai bên và một đường kết nối đang được kéo về phía nút tạo'),
    shot: `Screen: mid-drag, a connection being pulled from an image node to a generation node
Must show: both plus handles on the source node, and the in-progress line rendered green to mean the drop is valid
State: capture mid-gesture; a second frame showing the red invalid state would also be useful
UI language: English
Size: >= 1400x900`,
  },
  {
    page: 'infinite-canvas/connections-and-references', after: 4,
    file: 'infinite-canvas/reference-list-01',
    caption: L(
      'The reference list on a generation node',
      '生成節點上的引用清單',
      '生成ノードの参照一覧',
      '생성 노드의 참조 목록',
      'Danh sách tham chiếu trên một nút tạo'),
    alt: L(
      'Reference list showing connected assets with names, a usage counter, and drag handles for reordering',
      '引用清單顯示已連上的素材、名稱、使用計數與可拖曳排序的把手',
      '接続された素材、名前、使用数のカウンタ、並べ替え用のハンドルを示す参照一覧',
      '연결된 소재, 이름, 사용 개수 카운터, 순서 변경용 손잡이를 보여 주는 참조 목록',
      'Danh sách tham chiếu hiển thị tài nguyên đã nối, tên, bộ đếm và tay kéo để đổi thứ tự'),
    shot: `Screen: the reference list inside an open generate panel
Must show: at least three references with distinct names, the counter reading something like 3 / 5, and one text reference with its view full text control
State: a mix of image and text references so both rendering styles appear
UI language: English
Size: >= 1200x900`,
  },
  {
    page: 'infinite-canvas/connections-and-references', after: 5,
    file: 'infinite-canvas/cut-connection-01',
    caption: L(
      'Cutting a connection',
      '裁斷連線',
      '接続を切る',
      '연결 끊기',
      'Cắt một kết nối'),
    alt: L(
      'A selected connection line with the scissors button showing at its midpoint',
      '被選中的連線，中點出現剪刀按鈕',
      '選択された接続線の中点にハサミのボタンが出ている様子',
      '선택된 연결선의 중간에 가위 버튼이 나타난 모습',
      'Một đường kết nối được chọn với nút hình chiếc kéo hiện ở giữa'),
    shot: `Screen: a connection clicked so the cut control appears
Must show: the scissors button at the midpoint of the line, and both connected nodes
State: one connection selected, others unselected for contrast
UI language: English
Size: >= 1200x700`,
  },
  {
    page: 'infinite-canvas/generate-media', after: 0,
    file: 'infinite-canvas/generate-panel-01',
    caption: L(
      'The generate panel',
      '生成面板',
      '生成パネル',
      '생성 패널',
      'Khung tạo nội dung'),
    alt: L(
      'Generate panel below a node with the prompt box, model selector, parameters button, reference list, cost estimate, and send button',
      '節點下方的生成面板，含提示詞框、模型選擇器、參數按鈕、引用清單、費用預估與送出按鈕',
      'ノードの下に開いた生成パネル。プロンプト欄、モデル選択、パラメータ、参照一覧、費用見積もり、送信ボタン',
      '노드 아래에 열린 생성 패널로 프롬프트 상자, 모델 선택기, 매개변수 버튼, 참조 목록, 예상 비용, 보내기 버튼이 있음',
      'Khung tạo bên dưới một nút với ô câu lệnh, bộ chọn mô hình, nút tham số, danh sách tham chiếu, chi phí ước tính và nút gửi'),
    shot: `Screen: a generation node selected with its panel open
Must show: prompt box with placeholder or short prompt, model selector, parameters icon, reference list, and the send button carrying a credit estimate
State: two or three references connected
UI language: English
Size: >= 1400x1000`,
  },
  {
    page: 'infinite-canvas/generate-media', after: 3,
    file: 'infinite-canvas/generate-params-01',
    caption: L(
      'Generation parameters on the canvas',
      '畫布上的生成參數',
      'キャンバス上の生成パラメータ',
      '캔버스의 생성 매개변수',
      'Tham số tạo trên canvas'),
    alt: L(
      'Generation parameters popover with aspect ratio, batch size, and model specific settings',
      '生成參數浮層，含畫面比例、生成數量與模型專屬設定',
      '画面比率、生成枚数、モデル固有の設定を並べた生成パラメータのポップオーバー',
      '화면 비율, 생성 개수, 모델 전용 설정이 있는 생성 매개변수 팝오버',
      'Khung tham số tạo với tỷ lệ khung hình, số lượng và các thiết lập riêng của mô hình'),
    shot: `Screen: the generation parameters popover open from the generate panel
Must show: aspect ratio choices, batch size, and at least two model specific fields such as seed and resolution
State: an image model selected
UI language: English
Size: >= 1000x900`,
  },
  {
    page: 'infinite-canvas/generate-media', after: 4,
    file: 'infinite-canvas/bulk-review-01',
    caption: L(
      'The bulk submit review dialog',
      '批量提交的審閱對話框',
      '一括送信の確認ダイアログ',
      '일괄 제출 검토 대화상자',
      'Hộp thoại rà soát khi gửi hàng loạt'),
    alt: L(
      'Review dialog listing each selected node with its prompt, references, model, and parameters before submitting',
      '審閱對話框逐一列出選中節點的提示詞、引用、模型與參數，供提交前確認',
      '送信前に、選択した各ノードのプロンプト、参照、モデル、パラメータを並べた確認ダイアログ',
      '제출 전에 선택한 각 노드의 프롬프트, 참조, 모델, 매개변수를 나열한 검토 대화상자',
      'Hộp thoại rà soát liệt kê từng nút đã chọn kèm câu lệnh, tham chiếu, mô hình và tham số trước khi gửi'),
    shot: `Screen: the review dialog opened by bulk submit
Must show: at least three rows so the per-node breakdown is clear, plus the submit-all button
State: nodes with differing reference counts so the value of reviewing is visible
UI language: English
Size: >= 1400x1000`,
  },

  {
    page: 'infinite-canvas/text-table-and-youtube-nodes', after: 0,
    file: 'infinite-canvas/text-node-toolbar-01',
    caption: L(
      'A text node and its toolbar',
      '文本節點與它的工具列',
      'テキストノードとそのツールバー',
      '텍스트 노드와 그 툴바',
      'Một nút văn bản và thanh công cụ của nó'),
    alt: L(
      'Text node showing rendered Markdown with a toolbar offering AI assistant, formatting, import, and download',
      '文本節點顯示渲染後的 Markdown，工具列提供 AI 助手、格式、匯入與下載',
      'レンダリングされた Markdown を表示するテキストノードと、AI アシスタント、書式、取り込み、ダウンロードを備えたツールバー',
      '렌더링된 Markdown을 보여 주는 텍스트 노드와 AI 도우미, 서식, 가져오기, 다운로드가 있는 툴바',
      'Nút văn bản hiển thị Markdown đã kết xuất cùng thanh công cụ có trợ lý AI, định dạng, nhập và tải xuống'),
    shot: `Screen: a selected text node with real prose in it
Must show: the full node toolbar with every icon, and enough body text that the Markdown rendering is visible
State: node selected, not in edit mode
UI language: English
Size: >= 1200x900`,
  },
  {
    page: 'infinite-canvas/text-table-and-youtube-nodes', after: 1,
    file: 'infinite-canvas/table-field-mapping-01',
    caption: L(
      'Column mapping on a table node',
      '表格節點的欄位映射',
      'テーブルノードの列マッピング',
      '테이블 노드의 열 매핑',
      'Ánh xạ cột trên một nút bảng'),
    alt: L(
      'Table node with the field mapping control showing which column is the text and which is the prompt',
      '表格節點的欄位映射控制項，顯示哪一欄是文字、哪一欄是提示詞',
      'どの列がテキストでどの列がプロンプトかを示す、テーブルノードの列マッピング',
      '어느 열이 텍스트이고 어느 열이 프롬프트인지 보여 주는 테이블 노드의 필드 매핑',
      'Nút bảng với phần ánh xạ trường cho biết cột nào là văn bản và cột nào là câu lệnh'),
    shot: `Screen: a table node holding a short shot list, with the field mapping control open
Must show: at least four rows of real-looking shot data, and the prompt column clearly mapped
State: mapping panel open over the table
UI language: English
Size: >= 1400x900`,
  },
  {
    page: 'infinite-canvas/image-presets-and-storyboard', after: 0,
    file: 'infinite-canvas/preset-menu-01',
    caption: L(
      'Storyboard tools and generation presets on an image node',
      '圖片節點上的分鏡工具與生成預設',
      '画像ノードの絵コンテツールと生成プリセット',
      '이미지 노드의 스토리보드 도구와 생성 프리셋',
      'Công cụ bảng phân cảnh và mẫu tạo dựng sẵn trên một nút ảnh'),
    alt: L(
      'Menu on an image node listing sketch, character sheet, storyboard grid, and multi-angle presets',
      '圖片節點上的選單，列出草稿、角色設定表、分鏡網格與多角度預設',
      'スケッチ、キャラクターシート、絵コンテのグリッド、マルチアングルのプリセットを並べた画像ノードのメニュー',
      '스케치, 캐릭터 시트, 스토리보드 격자, 멀티앵글 프리셋을 나열한 이미지 노드 메뉴',
      'Menu trên nút ảnh liệt kê các mẫu phác thảo, bảng nhân vật, lưới phân cảnh và đa góc máy'),
    shot: `Screen: the storyboard tools or generation presets menu open on an image node
Must show: every preset entry, including all three grid sizes for both storyboard and multi-angle
State: an image node with media selected
UI language: English
Size: >= 1100x900`,
  },
  {
    page: 'infinite-canvas/image-presets-and-storyboard', after: 2,
    file: 'infinite-canvas/storyboard-builder-01',
    caption: L(
      'The storyboard builder',
      '分鏡建立器',
      '絵コンテビルダー',
      '스토리보드 빌더',
      'Trình dựng bảng phân cảnh'),
    alt: L(
      'Storyboard builder dialog with available frames on one side and a reorderable selection on the other',
      '分鏡建立器對話框，一側是可用畫格，另一側是可重排的選取清單',
      '片側に使えるコマ、もう片側に並べ替え可能な選択を並べた絵コンテビルダーのダイアログ',
      '한쪽에 사용 가능한 프레임, 다른 쪽에 순서를 바꿀 수 있는 선택 목록이 있는 스토리보드 빌더 대화상자',
      'Hộp thoại trình dựng bảng phân cảnh với các khung khả dụng ở một bên và phần đã chọn có thể đổi thứ tự ở bên kia'),
    shot: `Screen: the storyboard builder open from an image or dataset node
Must show: the frame filter, the pool of frames, and four or more frames dragged into the selection in order
State: mid-assembly so both panes have content
UI language: English
Size: >= 1600x1000
Anonymize: no real people`,
  },
  {
    page: 'infinite-canvas/video-tools', after: 0,
    file: 'infinite-canvas/video-node-toolbar-01',
    caption: L(
      'A video node and its toolbar',
      '視頻節點與它的工具列',
      '動画ノードとそのツールバー',
      '비디오 노드와 그 툴바',
      'Một nút video và thanh công cụ của nó'),
    alt: L(
      'Video node with a toolbar offering trim, frame capture, selective regeneration, preview switching, and director bar',
      '視頻節點的工具列，提供修剪、截幀、局部重生成、切換預覽與加入導演欄',
      'トリム、フレーム切り出し、部分的な作り直し、プレビュー切替、ディレクターバー追加を備えた動画ノードのツールバー',
      '트림, 프레임 캡처, 부분 재생성, 미리보기 전환, 디렉터 바 추가가 있는 비디오 노드 툴바',
      'Nút video với thanh công cụ có cắt bớt, chụp khung hình, tạo lại một đoạn, chuyển xem trước và thêm vào thanh đạo diễn'),
    shot: `Screen: a selected video node showing a frame of its clip
Must show: the complete node toolbar with every icon legible
State: node selected, video paused on a recognisable frame
UI language: English
Size: >= 1200x900
Anonymize: no real people in the clip`,
  },
  {
    page: 'infinite-canvas/video-tools', after: 1,
    file: 'infinite-canvas/selective-edit-01',
    caption: L(
      'Selective regeneration, with all four previews',
      '局部重生成，四條預覽軌',
      '部分的な作り直しと 4 つのプレビュー',
      '부분 재생성과 네 가지 미리보기',
      'Tạo lại một đoạn, với cả bốn bản xem trước'),
    alt: L(
      'Video node offering preview switching between original, segment, generated replacement, and stitched result',
      '視頻節點可在原片、選段、生成的替換片段與拼接結果之間切換預覽',
      '元動画、区間、生成された置き換え、連結結果を切り替えられる動画ノード',
      '원본, 구간, 생성된 대체본, 이어붙인 결과를 전환할 수 있는 비디오 노드',
      'Nút video cho phép chuyển xem giữa bản gốc, đoạn, bản thay thế được tạo và kết quả đã ghép'),
    shot: `Screen: a video node after a selective regeneration has completed
Must show: the four preview options, and the stitch control
State: a finished selective edit, not one still running
UI language: English
Size: >= 1200x900`,
  },
  {
    page: 'infinite-canvas/director-bar', after: 'top',
    file: 'infinite-canvas/director-bar-01',
    caption: L(
      'The director bar along the bottom of the canvas',
      '橫在畫布底部的導演欄',
      'キャンバス下部に広がるディレクターバー',
      '캔버스 아래쪽에 걸친 디렉터 바',
      'Thanh đạo diễn chạy dọc đáy canvas'),
    alt: L(
      'Director bar timeline with several clips in order, playback controls, and the export menu',
      '導演欄時間軸上依序排著數個片段，並有播放控制項與匯出選單',
      '複数のクリップが順に並んだタイムライン、再生コントロール、書き出しメニューを備えたディレクターバー',
      '여러 클립이 순서대로 놓인 타임라인, 재생 컨트롤, 내보내기 메뉴가 있는 디렉터 바',
      'Dòng thời gian của thanh đạo diễn với nhiều đoạn theo thứ tự, các nút phát và menu xuất'),
    shot: `Screen: the director bar open with a working timeline
Must show: five or more clips of differing lengths, the playhead, playback controls, snap and loop toggles, and the export control
State: mid-timeline, one clip selected
UI language: English
Size: >= 1800x600, cropped to the bar plus a little canvas above`,
  },
  {
    page: 'infinite-canvas/director-bar', after: 3,
    file: 'infinite-canvas/director-export-01',
    caption: L(
      'The export menu',
      '匯出選單',
      '書き出しメニュー',
      '내보내기 메뉴',
      'Menu xuất'),
    alt: L(
      'Export menu offering export video, export project as NLE, and download all media',
      '匯出選單提供匯出影片、匯出 NLE 專案與下載全部媒體',
      '動画の書き出し、NLE プロジェクトの書き出し、すべてのメディアのダウンロードを並べた書き出しメニュー',
      '영상 내보내기, NLE 프로젝트 내보내기, 모든 미디어 다운로드가 있는 내보내기 메뉴',
      'Menu xuất với xuất video, xuất dự án NLE và tải toàn bộ media'),
    shot: `Screen: the director bar export menu open
Must show: all three options
State: a timeline with content behind the menu
UI language: English
Size: >= 900x600`,
  },
  {
    page: 'infinite-canvas/asset-library-and-history', after: 0,
    file: 'infinite-canvas/asset-library-01',
    caption: L(
      'The asset library panel',
      '素材庫面板',
      '素材ライブラリのパネル',
      '소재 라이브러리 패널',
      'Khung thư viện tài nguyên'),
    alt: L(
      'Asset library showing the workspace folder tree and dataset cards with their action menus',
      '素材庫顯示工作區資料夾樹與帶操作選單的數據集卡片',
      'ワークスペースのフォルダツリーと、操作メニュー付きのデータセットカードを表示した素材ライブラリ',
      '워크스페이스 폴더 트리와 작업 메뉴가 달린 데이터셋 카드를 보여 주는 소재 라이브러리',
      'Thư viện tài nguyên hiển thị cây thư mục của không gian làm việc và các thẻ dataset kèm menu thao tác'),
    shot: `Screen: the asset library opened with command-B
Must show: the folder tree, several dataset cards with thumbnails, and one card menu open
State: a workspace with real content
UI language: English
Size: >= 1200x1000
Anonymize: generic dataset names`,
  },
  {
    page: 'infinite-canvas/asset-library-and-history', after: 2,
    file: 'infinite-canvas/node-history-picker-01',
    caption: L(
      'The node history picker',
      '節點歷史選擇器',
      'ノードの履歴ピッカー',
      '노드 기록 선택기',
      'Bộ chọn lịch sử của nút'),
    alt: L(
      'History picker listing every result a node has produced, with one promoted as the main output',
      '歷史選擇器列出該節點產出過的每個結果，其中一個被設為主要輸出',
      'そのノードが出したすべての結果を並べ、ひとつを主な出力に昇格させた履歴ピッカー',
      '그 노드가 만든 모든 결과를 나열하고 하나를 주 출력으로 올린 기록 선택기',
      'Bộ chọn lịch sử liệt kê mọi kết quả nút đã tạo, với một kết quả được đặt làm đầu ra chính'),
    shot: `Screen: the history picker open on a media node
Must show: four or more results so comparison is the obvious use, and a clear indication of which is current
State: results that differ visibly from one another
UI language: English
Size: >= 1200x900
Anonymize: no real people`,
  },
  {
    page: 'infinite-canvas/canvas-management', after: 0,
    file: 'infinite-canvas/canvas-switcher-01',
    caption: L(
      'The canvas switcher',
      '畫布切換器',
      'キャンバスの切り替え',
      '캔버스 전환기',
      'Bộ chuyển canvas'),
    alt: L(
      'Canvas switcher listing several canvases with search, reorder handles, and a new canvas action',
      '畫布切換器列出數張畫布，並有搜尋、排序把手與新建畫布',
      '検索、並べ替えハンドル、新規作成を備え、複数のキャンバスを並べた切り替え',
      '검색, 순서 변경 손잡이, 새 캔버스 만들기가 있고 여러 캔버스를 나열한 전환기',
      'Bộ chuyển canvas liệt kê nhiều canvas kèm tìm kiếm, tay kéo sắp xếp và tạo canvas mới'),
    shot: `Screen: the canvas switcher dropdown open from the top bar
Must show: four or more canvases with meaningful names, the search field, the reorder handles, and the per-row gear
State: current canvas marked
UI language: English
Size: >= 1000x900
Anonymize: generic canvas names such as Act one, Act two`,
  },
  {
    page: 'infinite-canvas/canvas-management', after: 2,
    file: 'infinite-canvas/tag-filter-01',
    caption: L(
      'Filtering the canvas by color tag',
      '依顏色標籤篩選畫布',
      'カラータグでキャンバスを絞り込む',
      '색상 태그로 캔버스 거르기',
      'Lọc canvas theo nhãn màu'),
    alt: L(
      'Color tag filter in the top bar listing each tag with its name, node count, and a download action',
      '頂欄的顏色標籤篩選，列出每個標籤的名稱、節點數與下載操作',
      '各タグの名前、ノード数、ダウンロード操作を並べた上部バーのカラータグフィルタ',
      '각 태그의 이름, 노드 수, 다운로드 작업을 나열한 상단 바의 색상 태그 필터',
      'Bộ lọc nhãn màu trên thanh trên cùng liệt kê từng nhãn kèm tên, số nút và thao tác tải xuống'),
    shot: `Screen: the color tag filter dropdown open from the left of the top bar
Must show: the All entry plus several named tags with node counts, and the download-this-tag action revealed on hover
State: tags named as workflow states
UI language: English
Size: >= 900x800`,
  },
  {
    page: 'infinite-canvas/keyboard-shortcuts', after: 'top',
    file: 'infinite-canvas/hotkey-help-01',
    caption: L(
      'The in-app shortcut reference',
      '應用內的快捷鍵說明',
      'アプリ内のショートカット一覧',
      '앱 안의 단축키 안내',
      'Bảng phím tắt ngay trong ứng dụng'),
    alt: L(
      'Shortcut help popup showing the node, editing, viewport, and tag groups side by side',
      '快捷鍵說明彈窗，並排顯示節點、編輯、視口與標籤四組',
      'ノード、編集、ビューポート、タグの各グループを並べたショートカット説明のポップアップ',
      '노드, 편집, 뷰포트, 태그 그룹을 나란히 보여 주는 단축키 도움말 팝업',
      'Cửa sổ trợ giúp phím tắt hiển thị các nhóm nút, chỉnh sửa, khung nhìn và nhãn cạnh nhau'),
    shot: `Screen: the shortcut help popup opened from the question mark in the capsule toolbar
Must show: all four columns, with key symbols legible
State: opened on a Mac so the command symbols match the documentation
UI language: English
Size: >= 1600x1000`,
  },
  {
    page: 'infinite-canvas/autosave-and-undo', after: 0,
    file: 'infinite-canvas/save-status-01',
    caption: L(
      'The save status capsule',
      '儲存狀態膠囊',
      '保存状態のカプセル',
      '저장 상태 캡슐',
      'Huy hiệu trạng thái lưu'),
    alt: L(
      'Save status capsule at the top left of the canvas showing the saved state',
      '畫布左上角的儲存狀態膠囊，顯示已保存',
      'キャンバス左上で保存済みを示す保存状態のカプセル',
      '캔버스 왼쪽 위에서 저장됨을 나타내는 저장 상태 캡슐',
      'Huy hiệu trạng thái lưu ở góc trên bên trái canvas, đang hiển thị đã lưu'),
    shot: `Screen: close crop of the save status capsule, top left of the canvas
Must show: the capsule clearly. Capture the saving and saved states as two frames if you can, and use the saved one here
State: after an edit has been written
UI language: English
Size: >= 700x200, cropped tight`,
  },

  // ── Idea Image Generation ──────────────────────────────────────────────────
  {
    page: 'image-generation/prompts', after: 0,
    file: 'image-generation/prompt-tabs-01',
    caption: L(
      'The user prompt and the AI-optimized final prompt',
      '用戶提示詞與 AI 優化後的最終提示詞',
      'ユーザープロンプトと AI が最適化した最終プロンプト',
      '사용자 프롬프트와 AI가 최적화한 최종 프롬프트',
      'Câu lệnh người dùng và câu lệnh cuối do AI tối ưu'),
    alt: L(
      'Prompt box with two tabs, the final prompt tab active and clearly longer than what was typed',
      '提示詞框有兩個頁籤，最終提示詞頁籤為選中狀態，內容明顯比原本輸入的長',
      '2 つのタブを持つプロンプト欄。最終プロンプトのタブが選ばれ、入力より明らかに長い',
      '탭이 두 개인 프롬프트 상자로, 최종 프롬프트 탭이 활성이며 입력한 것보다 확연히 김',
      'Ô câu lệnh có hai tab, tab câu lệnh cuối đang mở và dài hơn hẳn phần đã gõ'),
    shot: `Screen: the prompt box in the generation form
Must show: both tabs, with the final prompt selected so the difference from the user prompt is obvious, and the refresh control
State: a short user prompt that expanded into a much fuller final prompt
UI language: English
Size: >= 1200x600`,
  },
  {
    page: 'image-generation/prompts', after: 2,
    file: 'image-generation/prompt-templates-01',
    caption: L(
      'The prompt template library',
      '提示詞模板庫',
      'プロンプトテンプレートのライブラリ',
      '프롬프트 템플릿 라이브러리',
      'Thư viện mẫu câu lệnh'),
    alt: L(
      'Template dialog with the character, composition, camera, and blend categories',
      '模板對話框，含角色、構圖、運鏡與融合四個分類',
      'キャラクター、構図、カメラ、合成のカテゴリを備えたテンプレートのダイアログ',
      '캐릭터, 구도, 카메라, 합성 분류가 있는 템플릿 대화상자',
      'Hộp thoại mẫu với các nhóm nhân vật, bố cục, máy quay và hòa trộn'),
    shot: `Screen: the prompt template dialog
Must show: all four category tabs, with the character category selected so the editing-by-template idea is visible
State: several templates listed with their thumbnails
UI language: English
Size: >= 1400x1000`,
  },
  {
    page: 'image-generation/models', after: 0,
    file: 'image-generation/model-select-01',
    caption: L(
      'The video model selector, filtered by input type',
      '影片模型選擇器，依輸入類型篩選',
      '入力の種類で絞り込んだ動画モデルの選択',
      '입력 유형으로 거른 비디오 모델 선택기',
      'Bộ chọn mô hình video, lọc theo kiểu đầu vào'),
    alt: L(
      'Model selector showing the input type filter row above the family filter row, with matching models listed',
      '模型選擇器上方是輸入類型篩選列，下方是系列篩選列，並列出符合的模型',
      '入力の種類のフィルタ行の下にシリーズのフィルタ行があり、該当するモデルが並ぶモデル選択',
      '입력 유형 필터 줄 아래에 계열 필터 줄이 있고 해당 모델이 나열된 모델 선택기',
      'Bộ chọn mô hình với hàng lọc kiểu đầu vào phía trên hàng lọc dòng, kèm các mô hình khớp'),
    shot: `Screen: the video model selector open
Must show: both filter rows, with the first-frame filter active so only models supporting it remain
State: several models listed with avatars and one-line descriptions
UI language: English
Size: >= 1200x1000`,
  },
  {
    page: 'image-generation/reference-images', after: 1,
    file: 'image-generation/reference-block-01',
    caption: L(
      'Reference images with their types set',
      '已標好類型的參考圖',
      '種類を設定した参照画像',
      '유형을 지정한 참조 이미지',
      'Ảnh tham chiếu đã gán loại'),
    alt: L(
      'Reference block with several cards, each labelled by type such as character, location, and style',
      '參考區有數張卡片，各自標示角色、場景、風格等類型',
      'キャラクター、ロケーション、スタイルなどの種別ラベルが付いた参照カードの並び',
      '캐릭터, 장소, 스타일 등 유형이 표시된 여러 참조 카드가 있는 참조 영역',
      'Khối tham chiếu với nhiều thẻ, mỗi thẻ gán loại như nhân vật, bối cảnh và phong cách'),
    shot: `Screen: the unified reference block in the generation form
Must show: at least three references with different types, their names, and the add control
State: types visibly different so the labelling is the point of the shot
UI language: English
Size: >= 1200x700
Anonymize: no real people in the reference images`,
  },
  {
    page: 'image-generation/video-generation', after: 1,
    file: 'image-generation/frame-slots-01',
    caption: L(
      'First and last frame slots',
      '首幀與尾幀槽位',
      '始点と終点のフレームスロット',
      '첫 프레임과 마지막 프레임 슬롯',
      'Ô khung đầu và khung cuối'),
    alt: L(
      'First and last frame slots both filled, with the swap control between them',
      '首幀與尾幀槽位都已填入，中間是交換按鈕',
      '始点と終点の両方が埋まり、間に入れ替えボタンがある状態',
      '첫 프레임과 마지막 프레임이 모두 채워지고 사이에 교체 버튼이 있는 모습',
      'Cả ô khung đầu và khung cuối đều đã có ảnh, với nút hoán đổi ở giữa'),
    shot: `Screen: the frame slots in the video generation form
Must show: both slots filled with visibly different images, the swap control, and each slot remove button
State: a model that supports both frames selected
UI language: English
Size: >= 1000x600
Anonymize: no real people`,
  },
  {
    page: 'image-generation/storyboard-mode', after: 1,
    file: 'image-generation/storyboard-grid-01',
    caption: L(
      'A 3x3 storyboard result',
      '3×3 的分鏡結果',
      '3×3 の絵コンテ結果',
      '3×3 스토리보드 결과',
      'Kết quả bảng phân cảnh 3×3'),
    alt: L(
      'A single generated image divided into nine cells, each a different shot, with the per-cell upscale menu open',
      '一張生成圖被分成九格，每格是不同鏡頭，其中一格的放大選單已開啟',
      '9 つのセルに分かれた 1 枚の生成画像。各セルが別のショットで、セルのアップスケールメニューが開いている',
      '아홉 칸으로 나뉜 한 장의 생성 이미지로 각 칸이 다른 숏이며, 칸 업스케일 메뉴가 열려 있음',
      'Một ảnh được tạo chia thành chín ô, mỗi ô một cảnh quay khác nhau, với menu nâng cấp của một ô đang mở'),
    shot: `Screen: a completed storyboard result in the history
Must show: all nine cells clearly distinct, and the upscale menu open on one of them offering 2K and 4K
State: shot descriptions turned on so the captions are visible
UI language: English
Size: >= 1400x1200
Anonymize: no real people`,
  },
  {
    page: 'image-generation/history-and-results', after: 1,
    file: 'image-generation/history-entry-01',
    caption: L(
      'Anatomy of a history entry',
      '一筆歷史記錄的組成',
      '履歴 1 件の構成',
      '기록 한 건의 구성',
      'Cấu tạo của một mục lịch sử'),
    alt: L(
      'History entry showing mode, model, aspect ratio, seed, credits charged, final prompt, and reference thumbnails',
      '歷史記錄顯示模式、模型、畫面比例、種子、已消耗積分、最終提示詞與參考素材縮圖',
      'モード、モデル、画面比率、シード、消費クレジット、最終プロンプト、参照サムネイルを示す履歴の 1 件',
      '모드, 모델, 화면 비율, 시드, 소모 크레딧, 최종 프롬프트, 참조 썸네일을 보여 주는 기록 항목',
      'Mục lịch sử hiển thị chế độ, mô hình, tỷ lệ khung hình, seed, credit đã tính, câu lệnh cuối và hình thu nhỏ tham chiếu'),
    shot: `Screen: one entry in the generation history, cropped to itself
Must show: every metadata field named in the page, especially the seed tag and the credits charged
State: an entry with references so their thumbnails appear
UI language: English
Size: >= 1400x800
Anonymize: no real people`,
  },
  {
    page: 'image-generation/history-and-results', after: 3,
    file: 'image-generation/result-actions-01',
    caption: L(
      'The action menu on a single result',
      '單張結果的動作選單',
      '個々の結果のアクションメニュー',
      '개별 결과의 작업 메뉴',
      'Menu thao tác trên một kết quả'),
    alt: L(
      'Action menu over a generated image offering download, describe, edit again, reference, frame, and save options',
      '生成圖片上的動作選單，提供下載、描述、重新編輯、加為參考、設為首尾幀與保存等選項',
      '生成画像に重なるアクションメニュー。ダウンロード、説明、再編集、参照追加、フレーム設定、保存の各項目',
      '생성 이미지 위의 작업 메뉴로 다운로드, 설명, 다시 편집, 참조 추가, 프레임 지정, 저장이 있음',
      'Menu thao tác trên một ảnh được tạo với tải xuống, mô tả, sửa lại, thêm tham chiếu, đặt khung và lưu'),
    shot: `Screen: the hover action menu on one result inside the history
Must show: the full menu, taken inside a workspace so the Save to Idea entries are present
State: hovering a completed image result
UI language: English
Size: >= 900x900`,
  },
  {
    page: 'image-generation/manage-assets', after: 1,
    file: 'image-generation/asset-preview-01',
    caption: L(
      'The asset preview dialog',
      '素材預覽對話框',
      '素材プレビューのダイアログ',
      '소재 미리보기 대화상자',
      'Hộp thoại xem trước tài nguyên'),
    alt: L(
      'Asset preview dialog with the image, the info panel showing generation details, and the comments tab',
      '素材預覽對話框，含圖片、顯示生成詳情的資訊面板，以及評論頁籤',
      '画像、生成の詳細を表示する情報パネル、コメントタブを備えた素材プレビューのダイアログ',
      '이미지, 생성 상세를 보여 주는 정보 패널, 댓글 탭이 있는 소재 미리보기 대화상자',
      'Hộp thoại xem trước tài nguyên với ảnh, khung thông tin hiển thị chi tiết tạo và tab bình luận'),
    shot: `Screen: the asset preview dialog opened from a result
Must show: the info panel with generation details expanded, the seed, the credits charged, both prompts, and the use-for-generation-again control
State: an asset that actually carries generation metadata
UI language: English
Size: >= 1600x1000
Anonymize: no real people, generic asset name`,
  },
  {
    page: 'image-generation/manage-assets', after: 0,
    file: 'image-generation/move-to-dialog-01',
    caption: L(
      'Choosing a destination dataset',
      '選擇目標數據集',
      '移動先のデータセットを選ぶ',
      '대상 데이터셋 고르기',
      'Chọn dataset đích'),
    alt: L(
      'Tree picker for choosing the destination dataset when moving or copying assets',
      '移動或複製素材時，用來選擇目標數據集的樹狀選擇器',
      '素材の移動やコピー先のデータセットを選ぶツリー形式の選択',
      '소재를 옮기거나 복사할 때 대상 데이터셋을 고르는 트리 선택기',
      'Bộ chọn dạng cây để chọn dataset đích khi chuyển hoặc sao chép tài nguyên'),
    shot: `Screen: the destination picker opened from Move to
Must show: the folder tree with datasets, one selected, and the selection count at the bottom
State: opened on a multi-selection so the count is greater than one
UI language: English
Size: >= 1000x900`,
  },

  // ── Idea Studio ────────────────────────────────────────────────────────────
  {
    page: 'idea-studio/overview', after: 0,
    file: 'idea-studio/folders-01',
    caption: L(
      'The six system folders',
      '六個系統資料夾',
      '6 つのシステムフォルダ',
      '여섯 개의 시스템 폴더',
      'Sáu thư mục hệ thống'),
    alt: L(
      'Left panel file tree showing the story, character, location, prop, shot, and other folders with ideas inside',
      '左側面板的檔案樹，顯示故事、角色、地點、道具、分鏡與其他資料夾及其中的創意',
      'ストーリー、キャラクター、ロケーション、小道具、ショット、その他のフォルダとその中のアイデアを示すファイルツリー',
      '스토리, 캐릭터, 장소, 소품, 숏, 기타 폴더와 그 안의 아이디어를 보여 주는 파일 트리',
      'Cây tệp ở bảng bên trái hiển thị các thư mục câu chuyện, nhân vật, bối cảnh, đạo cụ, cảnh quay và khác cùng các ý tưởng bên trong'),
    shot: `Screen: the Idea Studio left panel with the file tree expanded
Must show: all six system folders, with two of them expanded to reveal ideas inside
State: a populated workspace, not an empty one
UI language: English
Size: >= 700x1000
Anonymize: fictional character and location names`,
  },
  {
    page: 'idea-studio/build-with-ai', after: 1,
    file: 'idea-studio/build-with-ai-01',
    caption: L(
      'Choosing what Build with AI should produce',
      '選擇 Build with AI 要產出什麼',
      'Build with AI に何を作らせるか選ぶ',
      'Build with AI가 무엇을 만들지 고르기',
      'Chọn những gì Build with AI sẽ tạo ra'),
    alt: L(
      'Build with AI dialog with the reference selector, inspiration box, and the six output checkboxes',
      'Build with AI 對話框，含參考選擇器、靈感輸入框與六個輸出勾選項',
      '参照の選択、着想の入力欄、6 つの出力チェックボックスを備えた Build with AI のダイアログ',
      '참조 선택기, 영감 입력란, 여섯 개의 출력 체크박스가 있는 Build with AI 대화상자',
      'Hộp thoại Build with AI với bộ chọn tham chiếu, ô cảm hứng và sáu ô chọn đầu ra'),
    shot: `Screen: the Build with AI dialog before running
Must show: the reference dropdown, the inspiration text area, all six output checkboxes, the shot count field, and the full auto versus enhanced choice
State: shots ticked so the shot count field is visible
UI language: English
Size: >= 1400x1000`,
  },
  {
    page: 'idea-studio/build-with-ai', after: 3,
    file: 'idea-studio/build-with-ai-review-01',
    caption: L(
      'Reviewing results before they are saved',
      '存檔前審閱結果',
      '保存前に結果を確認する',
      '저장 전 결과 검토',
      'Xem lại kết quả trước khi lưu'),
    alt: L(
      'Editable results table with per-card toggles, a target folder selector, and status badges',
      '可編輯的結果表格，含逐張啟停、目標資料夾選擇器與狀態徽章',
      'カードごとの有効切替、保存先フォルダの選択、状態バッジを備えた編集可能な結果テーブル',
      '카드별 켜고 끄기, 대상 폴더 선택기, 상태 배지가 있는 편집 가능한 결과 표',
      'Bảng kết quả có thể chỉnh sửa với công tắc từng thẻ, bộ chọn thư mục đích và huy hiệu trạng thái'),
    shot: `Screen: the Build with AI results panel after generation
Must show: several generated cards, at least one toggled off, the target folder selector, and the status badges
State: a mix of completed and still-processing cards if possible
UI language: English
Size: >= 1600x1000`,
  },
  {
    page: 'idea-studio/create-and-edit-ideas', after: 1,
    file: 'idea-studio/idea-form-01',
    caption: L(
      'The idea form',
      '創意表單',
      'アイデアのフォーム',
      '아이디어 양식',
      'Biểu mẫu ý tưởng'),
    alt: L(
      'Idea form with type, title, summary, detailed content, tags, and the image and video prompt fields',
      '創意表單，含類型、標題、簡介、詳細內容、標籤，以及圖像與影片提示詞欄位',
      'タイプ、タイトル、概要、詳細な内容、タグ、画像と動画のプロンプト欄を備えたアイデアのフォーム',
      '유형, 제목, 요약, 상세 내용, 태그, 이미지와 비디오 프롬프트 항목이 있는 아이디어 양식',
      'Biểu mẫu ý tưởng với loại, tiêu đề, tóm tắt, nội dung chi tiết, thẻ, và các ô câu lệnh ảnh và video'),
    shot: `Screen: the idea form open on an existing character
Must show: every field, with a genuinely descriptive summary filled in so the guidance on the page is illustrated, and the AI generate buttons beside the prompt fields
State: editing rather than creating, so the fields have content
UI language: English
Size: >= 1200x1100
Anonymize: fictional character`,
  },
  {
    page: 'idea-studio/file-tree-actions', after: 1,
    file: 'idea-studio/ai-shortcuts-01',
    caption: L(
      'Right-click AI shortcuts on a screenplay',
      '在劇本上右鍵的 AI 捷徑',
      '脚本を右クリックしたときの AI ショートカット',
      '대본을 우클릭했을 때의 AI 단축 기능',
      'Lối tắt AI khi nhấp chuột phải vào một kịch bản'),
    alt: L(
      'Context menu on a screenplay idea offering summarize all characters, locations, props, and generate storyboard',
      '劇本創意上的右鍵選單，提供總結所有角色、地點、道具與生成分鏡',
      '脚本のアイデアに対する右クリックメニュー。すべてのキャラクター、ロケーション、小道具の要約と絵コンテ生成',
      '대본 아이디어의 우클릭 메뉴로 모든 캐릭터, 장소, 소품 요약과 스토리보드 생성이 있음',
      'Menu chuột phải trên một ý tưởng kịch bản với tóm tắt tất cả nhân vật, bối cảnh, đạo cụ và tạo bảng phân cảnh'),
    shot: `Screen: the file tree context menu open on an idea typed as screenplay
Must show: the four AI shortcuts together with the general actions above them
State: opened on an idea in the story folder
UI language: English
Size: >= 900x900`,
  },
  {
    page: 'idea-studio/idea-detail-and-gallery', after: 1,
    file: 'idea-studio/gallery-view-01',
    caption: L(
      'Gallery view',
      '圖庫檢視',
      'ギャラリービュー',
      '갤러리 보기',
      'Chế độ thư viện'),
    alt: L(
      'Full-screen gallery view with a large image, the thumbnail strip along the bottom, and the like control',
      '全螢幕圖庫檢視，含大圖、底部縮圖條與按讚控制項',
      '大きな画像、下部のサムネイル列、いいねの操作を備えた全画面のギャラリービュー',
      '큰 이미지, 아래쪽 썸네일 줄, 좋아요 버튼이 있는 전체 화면 갤러리 보기',
      'Chế độ thư viện toàn màn hình với ảnh lớn, dải hình thu nhỏ ở dưới và nút thích'),
    shot: `Screen: gallery view opened from an idea with several images
Must show: the large image, the thumbnail strip, the image and idea position indicators, and the like control
State: middle of a set so the position indicators read something like 3 of 8
UI language: English
Size: >= 1600x1000
Anonymize: no real people`,
  },
  {
    page: 'idea-studio/workspace-ai-chat', after: 0,
    file: 'idea-studio/ai-chat-01',
    caption: L(
      'The workspace AI chat panel',
      '工作區 AI 聊天面板',
      'ワークスペース AI チャットのパネル',
      '워크스페이스 AI 채팅 패널',
      'Khung trò chuyện AI của không gian làm việc'),
    alt: L(
      'Right-hand chat panel with the ask and agent mode switch and an idea attached as context',
      '右側聊天面板，含 Ask 與 Agent 模式切換，並附上一則創意作為上下文',
      'Ask と Agent モードの切り替えがあり、アイデアが文脈として添付された右側のチャットパネル',
      'Ask와 Agent 모드 전환이 있고 아이디어가 맥락으로 첨부된 오른쪽 채팅 패널',
      'Khung trò chuyện bên phải với công tắc chế độ Ask và Agent, kèm một ý tưởng được đính làm ngữ cảnh'),
    shot: `Screen: the AI chat panel in Idea Studio
Must show: the mode switch, an attached idea, and a reply containing structured idea data with the save-all button visible
State: mid-conversation
UI language: English
Size: >= 800x1000`,
  },
  // ── Workspaces ─────────────────────────────────────────────────────────────
  {
    page: 'workspaces/overview', after: 'top',
    file: 'workspaces/workspace-list-01',
    caption: L(
      'The workspace list',
      '工作區列表',
      'ワークスペース一覧',
      '워크스페이스 목록',
      'Danh sách không gian làm việc'),
    alt: L(
      'Workspace cards with cover images, aspect ratio badges, language tags, member avatars, and the scope filters above',
      '工作區卡片，含封面圖、比例徽章、語言標籤、成員頭像，上方是範圍篩選',
      'カバー画像、画面比率のバッジ、言語タグ、メンバーのアバターを持つカードと、上部の絞り込み',
      '커버 이미지, 화면 비율 배지, 언어 태그, 멤버 아바타가 있는 카드와 위쪽의 범위 필터',
      'Các thẻ không gian làm việc với ảnh bìa, huy hiệu tỷ lệ, nhãn ngôn ngữ, ảnh đại diện thành viên và bộ lọc phạm vi phía trên'),
    shot: `Screen: My Workspaces
Must show: the four scope filters, the sort control, the search box, the create button, and at least four cards with covers and member avatars
State: one card favorited so the star state is visible
UI language: English
Size: >= 1600x1000
Anonymize: generic workspace names, generic avatars`,
  },
  {
    page: 'workspaces/settings', after: 1,
    file: 'workspaces/app-management-01',
    caption: L(
      'App management',
      '應用管理',
      'アプリ管理',
      '앱 관리',
      'Quản lý ứng dụng'),
    alt: L(
      'App management tab listing the workspace apps with the add app dialog offering Infinite Canvas and Digital Host',
      '應用管理分頁列出工作區的應用，添加應用對話框提供無限畫布與數字主持人',
      'ワークスペースのアプリを並べたアプリ管理タブと、無限キャンバスとデジタル司会者を提示する追加ダイアログ',
      '워크스페이스의 앱을 나열한 앱 관리 탭과 무한 캔버스, 디지털 진행자를 제시하는 추가 대화상자',
      'Tab quản lý ứng dụng liệt kê các ứng dụng của không gian làm việc cùng hộp thoại thêm ứng dụng với Canvas vô hạn và Người dẫn chương trình số'),
    shot: `Screen: the App management tab in workspace settings, with the add app dialog open over it
Must show: the existing apps behind, and both addable apps in the dialog
State: signed in with permission to manage the workspace
UI language: English
Size: >= 1400x1000`,
  },
  {
    page: 'workspaces/members-and-permissions', after: 4,
    file: 'workspaces/invite-link-01',
    caption: L(
      'The workspace invite link',
      '工作區邀請連結',
      'ワークスペースの招待リンク',
      '워크스페이스 초대 링크',
      'Liên kết mời vào không gian làm việc'),
    alt: L(
      'Members tab showing the active invite link with its expiry and the revoke control',
      '成員分頁顯示有效的邀請連結、到期時間與撤銷控制項',
      '有効な招待リンクと有効期限、失効させる操作を示すメンバータブ',
      '유효한 초대 링크와 만료 시각, 취소 버튼을 보여 주는 멤버 탭',
      'Tab thành viên hiển thị liên kết mời còn hiệu lực kèm thời điểm hết hạn và nút thu hồi'),
    shot: `Screen: the Members tab with an active invite link
Must show: the member list with mixed roles, the invite link with its expiry time, and the copy and revoke controls
State: signed in as the owner so the role controls are enabled
UI language: English
Size: >= 1400x1000
Anonymize: generic member names and avatars`,
  },
  {
    page: 'workspaces/viewer-access', after: 3,
    file: 'workspaces/viewer-permissions-01',
    caption: L(
      'Choosing which canvases and color tags viewers can see',
      '選擇查看者可以看到哪些畫布與顏色標籤',
      '閲覧者に見せるキャンバスとカラータグを選ぶ',
      '뷰어에게 보여 줄 캔버스와 색상 태그 고르기',
      'Chọn canvas và nhãn màu mà người xem được thấy'),
    alt: L(
      'Viewer permissions panel with per-canvas checkboxes, visible color tags, and the annotation toggle',
      '查看者權限面板，含逐張畫布勾選、可見顏色標籤與註記開關',
      'キャンバスごとのチェック、表示するカラータグ、注釈の可否を備えた閲覧者の権限パネル',
      '캔버스별 체크박스, 표시할 색상 태그, 주석 허용 토글이 있는 뷰어 권한 패널',
      'Khung quyền của người xem với ô chọn từng canvas, nhãn màu hiển thị và công tắc chú thích'),
    shot: `Screen: the visible canvases section of the viewer permissions panel
Must show: several canvases listed with checkboxes, the color tag selection with named tags, and the annotation toggle
State: some canvases and tags unticked so the granularity is visible
UI language: English
Size: >= 1200x1000`,
  },

  // ── Digital Host ───────────────────────────────────────────────────────────
  {
    page: 'digital-host/overview', after: 2,
    file: 'digital-host/program-list-01',
    caption: L(
      'The program list',
      '節目列表',
      '番組一覧',
      '프로그램 목록',
      'Danh sách chương trình'),
    alt: L(
      'Program list with search, language and presenter filters, and rows showing each program step badge',
      '節目列表，含搜尋、語言與主持人篩選，每列顯示該節目的步驟徽章',
      '検索、言語と司会者の絞り込み、各番組のステップバッジを持つ行を並べた番組一覧',
      '검색, 언어와 진행자 필터, 각 프로그램의 단계 배지가 있는 행으로 이뤄진 프로그램 목록',
      'Danh sách chương trình với tìm kiếm, bộ lọc ngôn ngữ và người dẫn, cùng các dòng hiển thị huy hiệu bước'),
    shot: `Screen: the Digital Host program list
Must show: the filter row, and at least three programs sitting at different steps so the badges differ
State: presenter and scene thumbnails visible on the rows
UI language: English
Size: >= 1600x900
Anonymize: no real people as presenters`,
  },
  {
    page: 'digital-host/script-to-video', after: 2,
    file: 'digital-host/step-break-01',
    caption: L(
      'Segments after splitting the script',
      '腳本拆段後的片段',
      '台本を分割したあとのセグメント',
      '대본을 나눈 뒤의 세그먼트',
      'Các đoạn sau khi chia kịch bản'),
    alt: L(
      'Segment table with dialogue, action, estimated duration, and tone for each segment, plus the seconds-per-segment control',
      '片段表格顯示每段的對白、動作、預估時長與語氣，以及每段秒數的選擇器',
      '各セグメントの台詞、動作、推定尺、トーンを並べた表と、1 セグメントあたりの秒数の選択',
      '각 세그먼트의 대사, 동작, 예상 길이, 톤을 보여 주는 표와 세그먼트당 초 선택',
      'Bảng các đoạn với lời thoại, hành động, thời lượng ước tính và sắc thái, cùng bộ chọn số giây mỗi đoạn'),
    shot: `Screen: step two of the program wizard after a split
Must show: the seconds-per-segment control, the instruction field, and five or more segment rows with their dialogue and tone
State: after a successful split, before any editing
UI language: English
Size: >= 1600x1000`,
  },
  {
    page: 'digital-host/script-to-video', after: 4,
    file: 'digital-host/step-video-01',
    caption: L(
      'Segment cards at the video step',
      '視頻步驟的片段卡片',
      '映像ステップのセグメントカード',
      '영상 단계의 세그먼트 카드',
      'Các thẻ đoạn ở bước video'),
    alt: L(
      'Segment cards showing video preview, reference images, prompt, settings summary, and status',
      '片段卡片顯示影片預覽、參考圖、提示詞、設定摘要與狀態',
      '映像プレビュー、参照画像、プロンプト、設定の要約、状態を示すセグメントカード',
      '영상 미리보기, 참조 이미지, 프롬프트, 설정 요약, 상태를 보여 주는 세그먼트 카드',
      'Các thẻ đoạn hiển thị bản xem trước video, ảnh tham chiếu, câu lệnh, tóm tắt thiết lập và trạng thái'),
    shot: `Screen: step four of the program wizard
Must show: two or three segment cards in different states, ideally one approved, one generated, and one missing voiceover
State: a program partway through video generation
UI language: English
Size: >= 1600x1000
Anonymize: no real people as presenters`,
  },
  {
    page: 'digital-host/script-to-video', after: 5,
    file: 'digital-host/step-download-01',
    caption: L(
      'The finish step, with the credit report',
      '完成步驟與積分報告',
      '完了ステップとクレジットレポート',
      '완료 단계와 크레딧 보고서',
      'Bước hoàn tất, kèm báo cáo credit'),
    alt: L(
      'Finish step showing the export menu and the credit report with success rates for video and voiceover',
      '完成步驟顯示匯出選單，以及影片與配音成功率的積分報告',
      '書き出しメニューと、映像とナレーションの成功率を示すクレジットレポートを表示した完了ステップ',
      '내보내기 메뉴와 영상 및 내레이션 성공률을 보여 주는 크레딧 보고서가 있는 완료 단계',
      'Bước hoàn tất hiển thị menu xuất và báo cáo credit với tỷ lệ thành công của video và lời thoại'),
    shot: `Screen: step five with the credit report tab active and the export menu open
Must show: all six export options, and the credit report cards with their success rates
State: a program with some failed attempts so the success rate is not 100 percent
UI language: English
Size: >= 1600x1000`,
  },
  // ── Organizations ──────────────────────────────────────────────────────────
  {
    page: 'organizations/overview', after: 0,
    file: 'organizations/create-org-01',
    caption: L(
      'Setting your own limit when creating an organization',
      '建立組織時設定你自己的限額',
      '組織を作るときに自分の上限を設定する',
      '조직을 만들 때 자신의 한도 설정하기',
      'Đặt hạn mức của chính bạn khi tạo tổ chức'),
    alt: L(
      'Second step of the create organization form with the owner monthly and permanent limit fields',
      '創建組織表單的第二步，含擁有者的月度與永久限額欄位',
      'オーナーの月間上限と無期限上限の入力欄を持つ、組織作成フォームの 2 段階目',
      '소유자의 월 한도와 영구 한도 입력란이 있는 조직 만들기 양식의 두 번째 단계',
      'Bước hai của biểu mẫu tạo tổ chức với các ô hạn mức tháng và vĩnh viễn của chủ sở hữu'),
    shot: `Screen: step two of the create organization wizard
Must show: the owner limit fields and the default member limit template
State: at least one owner limit filled so the requirement is illustrated
UI language: English
Size: >= 1100x900`,
  },
  {
    page: 'organizations/roles-and-permissions', after: 0,
    file: 'organizations/console-members-01',
    caption: L(
      'The members and limits table in the organization console',
      '組織控制台的成員與限額表格',
      '組織コンソールのメンバーと上限の表',
      '조직 콘솔의 멤버와 한도 표',
      'Bảng thành viên và hạn mức trong bảng điều khiển tổ chức'),
    alt: L(
      'Console table listing members with their role, monthly and permanent limits, usage, and visible models',
      '控制台表格列出成員的角色、月度與永久限額、已用量與可見模型',
      'メンバーの役割、月間と無期限の上限、使用量、利用できるモデルを並べたコンソールの表',
      '멤버의 역할, 월·영구 한도, 사용량, 사용 가능한 모델을 나열한 콘솔 표',
      'Bảng trong bảng điều khiển liệt kê thành viên kèm vai trò, hạn mức tháng và vĩnh viễn, mức đã dùng và các mô hình khả dụng'),
    shot: `Screen: the Members and limits tab of the organization console
Must show: several members with different roles, at least one with no limit configured, and one row menu open showing transfer owner
State: signed in as the owner so transfer owner appears
UI language: English
Size: >= 1800x1000
Anonymize: generic member names and avatars`,
  },
  {
    page: 'organizations/invite-members', after: 0,
    file: 'organizations/invite-block-01',
    caption: L(
      'Creating an organization invite',
      '建立組織邀請',
      '組織の招待を作る',
      '조직 초대 만들기',
      'Tạo lời mời vào tổ chức'),
    alt: L(
      'Invite block with the email, role, monthly limit, and permanent limit fields above the generate button',
      '邀請區塊，含郵箱、角色、月度限額與永久限額欄位，下方是產生按鈕',
      'メール、ロール、月間上限、無期限上限の各欄と生成ボタンを備えた招待ブロック',
      '이메일, 역할, 월 한도, 영구 한도 항목과 생성 버튼이 있는 초대 영역',
      'Khối mời với các ô email, vai trò, hạn mức tháng và hạn mức vĩnh viễn phía trên nút tạo'),
    shot: `Screen: the invite block at the top of the Members and limits tab
Must show: every field and the generate invite link button
State: role set to member, limits left blank so the default template note applies
UI language: English
Size: >= 1400x600`,
  },
  // ── Billing ────────────────────────────────────────────────────────────────
  {
    page: 'billing/how-credits-work', after: 2,
    file: 'billing/cost-estimate-01',
    caption: L(
      'The estimate on the generate button',
      '生成按鈕上的預估費用',
      '生成ボタンに表示される見積もり',
      '생성 버튼에 표시되는 예상 비용',
      'Chi phí ước tính trên nút tạo'),
    alt: L(
      'Generate button carrying its credit estimate, beside a per-second rate shown for a model with automatic duration',
      '生成按鈕帶著積分預估，旁邊是自動時長模型顯示的每秒單價',
      'クレジットの見積もりを載せた生成ボタンと、自動尺のモデルで表示される秒単価',
      '크레딧 예상이 붙은 생성 버튼과, 자동 길이 모델에서 표시되는 초당 요율',
      'Nút tạo mang theo chi phí credit ước tính, bên cạnh là đơn giá theo giây của một mô hình dùng thời lượng tự động'),
    shot: `Screen: the generate button with a cost estimate
Must show: a fixed total in one frame and, ideally as a second capture, the per-second rate a duration-based model displays instead
State: settings that produce a non-trivial estimate
UI language: English
Size: >= 900x300, cropped tight`,
  },
  {
    page: 'billing/wallet-and-records', after: 0,
    file: 'billing/balance-card-01',
    caption: L(
      'Credit buckets and their expiry dates',
      '積分桶與各自的到期日',
      'クレジットの入れ物とそれぞれの有効期限',
      '크레딧 통과 각각의 만료일',
      'Các túi credit và ngày hết hạn của chúng'),
    alt: L(
      'Balance card expanded to show each credit bucket with its remaining amount and expiry date',
      '餘額卡展開後顯示每個積分桶的剩餘量與到期日',
      '各入れ物の残量と有効期限を表示するために展開した残高カード',
      '각 통의 남은 양과 만료일을 보여 주도록 펼친 잔액 카드',
      'Thẻ số dư đã mở rộng để hiển thị từng túi credit với số còn lại và ngày hết hạn'),
    shot: `Screen: the balance card on the dashboard with View details expanded
Must show: at least three buckets with different expiry dates, so the soonest-expires-first rule has something to illustrate
State: a mix of granted and purchased buckets
UI language: English
Size: >= 1000x900`,
  },
  {
    page: 'billing/wallet-and-records', after: 1,
    file: 'billing/usage-consumption-01',
    caption: L(
      'The consumption tab',
      '消費分頁',
      '消費のタブ',
      '소비 탭',
      'Tab tiêu thụ'),
    alt: L(
      'Consumption table with credit change, discount, and refund columns, and the date, model, and workspace filters',
      '消費表格含積分變動、折扣與退款欄位，以及日期、模型與工作區篩選',
      'クレジットの増減、割引、返金の列と、期間、モデル、ワークスペースの絞り込みを持つ消費の表',
      '크레딧 증감, 할인, 환불 열과 기간, 모델, 워크스페이스 필터가 있는 소비 표',
      'Bảng tiêu thụ với các cột biến động credit, giảm giá và hoàn tiền, cùng bộ lọc ngày, mô hình và không gian làm việc'),
    shot: `Screen: the Consumption tab of the usage page
Must show: the filters and several rows, including at least one with a refund and one with a discount so those columns are populated
State: a workspace with real generation history
UI language: English
Size: >= 1800x900
Anonymize: generic workspace and operator names`,
  },
]
