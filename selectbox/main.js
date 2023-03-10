// グローバルに展開
phina.globalize();
/*
 * メインシーン
 */
phina.define("MainScene", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(options) {
    // 親クラス初期化
    this.superInit(options);
    // 背景色
    this.backgroundColor = 'black';
    // Shape
    var shape = RectangleShape({
      width: 128,
      height: 128,
      fill: 'red',
      stroke: null,
    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());
    // ドロップダウンリストを取得
    var selector = document.getElementById('selector');
    // イベント設定
    selector.addEventListener('change', function(event) {
      // 選択された値をShapeの色に設定
      shape.fill = event.target.value;
    });
  },
});
/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    // 画面サイズ
    width: 300,
    height: 300,
    // 表示先のcanvasを指定
    query: '#mycanvas',
    // MainScene から開始
    startLabel: 'main',
    // 画面にフィットさせない
    fit: false,
  });
  // fps表示
  //app.enableStats();
  // 実行
  app.run();
});
