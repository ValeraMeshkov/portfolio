<template>
  <div id="experience" class="section-experience">
    <h1 class="title">
      <TextBorder text="Experience" :show-border="true" :is-title="true" />
    </h1>

    <div class="block">
      <h1 class="title">
        <NuxtLink :href="COMPANY_SENDNOW" target="_blank">
          <ButtonIcon
            src="images/experience/sendnow.png"
            alt="sendnow"
            :size="70"
          />
        </NuxtLink>

        <TextAccent class="text" text="Sendnow" />

        <p class="description">( July-2024 - March-2025 )</p>
      </h1>

      <p class="description">
        <span>Sites where development took place:</span>
        <br />

        <TextAccent text="Landing" /> -

        <NuxtLink :href="COMPANY_SENDNOW" target="_blank">
          <TextBorder :text="COMPANY_SENDNOW" :accent="true" />
        </NuxtLink>

        (company page to attract users);

        <br />

        <TextAccent text="Platform" /> -

        <NuxtLink :href="COMPANY_SENDNOW_PLATFORM" target="_blank">
          <TextBorder :text="COMPANY_SENDNOW_PLATFORM" :accent="true" />
        </NuxtLink>
        (development and project from scratch, auth, creating transactions for
        various providers, display of transaction history, user settings);

        <br />

        Technologies used: <TextAccent text="React, Typescript, Vite" />
      </p>
    </div>

    <div class="block">
      <h1 class="title">
        <NuxtLink :href="COMPANY_CITRONUS" target="_blank">
          <ButtonIcon
            src="images/experience/citronus.png"
            alt="citronus"
            :size="70"
          />
        </NuxtLink>

        <TextAccent class="text" text="Citronus" />

        <p class="description">( January-2024 - July-2024 )</p>
      </h1>

      <p class="description">
        The site where the development was carried out
        <NuxtLink :href="COMPANY_CITRONUS" target="_blank">
          <TextBorder :text="COMPANY_CITRONUS" :accent="true" />
        </NuxtLink>

        <br />

        Sections:
        <br />
        <TextAccent text="Spot-trading" /> (Chart, Order book, Buy, Sell, Open
        orders, Order history, Trade history, Funds);
        <br />
        <TextAccent text="Wallet" /> (Overview, Spot, Funding, Transactions
        History);
        <br />
        Technologies used: <TextAccent text="React, Typescript, Ant Design" />
      </p>
    </div>

    <div class="block">
      <h1 class="title">
        <NuxtLink :href="COMPANY_LETIT" target="_blank">
          <ButtonIcon
            src="images/experience/letit.png"
            alt="letit"
            :size="70"
          />
        </NuxtLink>

        <TextAccent class="text" text="Letit" />

        <p class="description">( December-2022 - January-2024 )</p>
      </h1>

      <p class="description">
        The site where the development was carried out
        <NuxtLink :href="COMPANY_LETIT_PROJECT" target="_blank">
          <TextBorder :text="COMPANY_LETIT_PROJECT" :accent="true" />
        </NuxtLink>

        <br />
        Sections:
        <br />
        <TextAccent text="Admin" /> (information about users, transactions,
        referral bonuses);
        <br />
        <TextAccent text="Dashboard" /> (calendar with history of trades and
        charts);
        <br />
        <TextAccent text="Trader's diary" />(display of position history,
        display of open positions);
        <br />
        <TextAccent text="Positions" />(display of transactions, fundings on the
        chart);
        <br />
        <TextAccent text="Trading terminal" /> purchase and sale of assets,
        displaying charts (drawing entry and exit points for trades);
        <br />
        <TextAccent text="Wallets, balances" /> (spots, futures) from the
        exchanges;
        <br />
        <TextAccent text="Referral system" />;
        <br />
        Technologies used:
        <TextAccent text="Vue, Typescript, nuxt, web3, crypto-js" />
      </p>
    </div>

    <div class="block">
      <h1 class="title">
        <NuxtLink :href="COMPANY_BSL" target="_blank">
          <ButtonIcon src="images/experience/bsl.png" alt="bsl" :size="70" />
        </NuxtLink>

        <TextAccent class="text" text="Bsl" />

        <p class="description">( September-2019 - December-2022 )</p>
      </h1>

      <p class="description">
        Worked with
        <TextAccent text="large" />
        projects ( Worldskills, Pike, Netfi, Delta, МОК линзы, Hoff, Магнит,
        Много лосося, Eyefood)
        <br />
        Gained
        <TextAccent text="extensive" /> experience working with different
        <TextAccent text="teams" />, different
        <TextAccent text="technologies" /> and <TextAccent text="libraries" />.
      </p>
    </div>

    <div class="block">
      <h1 class="title">
        <NuxtLink :href="COMPANY_VERV" target="_blank">
          <ButtonIcon src="images/experience/verv.png" alt="verv" :size="70" />
        </NuxtLink>

        <TextAccent class="text" text="Verv" />

        <p class="description">( August-2018 - August-2019 )</p>
      </h1>

      <p class="description">
        Actively participated in the
        <TextAccent text="development" />
        of content for website and the Running, Walking, Meditate, Sleep
        applications
      </p>
    </div>

    <NuxtLink class="button" to="#projects">
      <ButtonText text="See Projects" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import {
  COMPANY_VERV,
  COMPANY_BSL,
  COMPANY_LETIT,
  COMPANY_LETIT_PROJECT,
  COMPANY_CITRONUS,
  COMPANY_SENDNOW,
  COMPANY_SENDNOW_PLATFORM,
} from "~/constants/constants";
</script>  

<style lang="scss" scoped>
.section-experience {
  padding: 100px 20px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    width: fit-content;
    margin-top: 0px;
    text-align: center;
    font-size: clamp(24px, 3rem, 48px);
  }

  .description {
    text-align: center;
    margin-top: 10px;
    font-size: clamp(16px, 2rem, 24px);
  }

  .button {
    display: block;
    margin-top: 0;
    width: fit-content;
  }

  .block {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;

      .text {
        margin: 0 20px;
      }

      .description {
        margin-top: 0;
      }
    }

    .description {
      text-align: left;
    }
  }
}
</style>