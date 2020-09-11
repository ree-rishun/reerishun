<template>
  <div>
    <h2>資格</h2>
    <ul>
      <li>
        【国家資格】<br>基本情報技術者
      </li>
      <li>WEBデザイナー検定<br>エキスパート</li>
      <li>情報活用試験1級</li>
      <li>情報システム試験<br>プログラマ認定</li>
      <li>情報システム試験<br>システムエンジニア認定</li>
    </ul>

    <h2>受賞</h2>
    <ul>
      <li>OpenHack2020<br>優秀賞 受賞</li>
      <li>SDLアプリコンテスト2020ハッカソン<br>最優秀賞 受賞</li>
      <li>にいがたデジコングランプリ<br>オープンデータ活用部門<br>優秀賞 受賞</li>
      <li>OthloHack<br>A-team賞 受賞</li>
    </ul>

    <h2>技術</h2>
    <h3>FrontEnd</h3>
    <ul>
      <li>
        <v-progress-circular
                :indeterminate="false"
                :rotate="270"
                :size="20"
                :value="40"
                :width="4"
                color="#000000"
        >
        </v-progress-circular>
        Vue.js
      </li>
      <li>SCSS</li>
      <li>Tailwind.css</li>
      <li>HTML</li>
      <li>Pug</li>
      <li>WordPress</li>
    </ul>
    <h3>BackEnd</h3>
    <ul>
      <li>Laravel</li>
      <li>Ruby on Rails</li>
      <li>Node.js</li>
      <li>Python</li>
      <li>Java</li>
      <li>C / C++</li>
    </ul>
    <h3>Database</h3>
    <ul>
      <li>MySQL</li>
      <li>OracleDatabase</li>
      <li>ScyllaDB</li>
    </ul>
    <h3>Cloud</h3>
    <ul>
      <li>Firebase</li>
      <li>AWS</li>
      <li>GCP</li>
    </ul>
    <h3>Other</h3>
    <ul>
      <li>Fusion 360</li>
      <li>Photoshop</li>
      <li>Illustrator</li>
      <li>PremierePro</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "skill"
    }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  h2{
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
  }
</style>