<template>
  <div
    id="experience"
    class="section-experience"
  >
    <h1 class="title">
      <TextBorder
        text="Experience"
        :show-border="true"
        :is-title="true"
      />
    </h1>

    <div class="block">
      <h1 class="title">
        <NuxtLink
          :href="COMPANY_LETIT"
          target="_blank"
        >
          <ButtonIcon
            src="experience/letit.png"
            alt="letit"
            :size="70"
          />
        </NuxtLink>

        <TextAccent
          class="text"
          text="Letit"
        />

        <p class="description">( December-2022 - December-2023 )</p>
      </h1>


      <p class="description">
        The site where the development was carried out
        <NuxtLink
          :href="COMPANY_LETIT_PROJECT"
          target="_blank"
        >
          <TextBorder
            :text="COMPANY_LETIT_PROJECT"
            :accent="true"
          />
        </NuxtLink>

        <br>
        Sections:
        <TextAccent text="Admin" /> (information about users, transactions, referral bonuses);
        <TextAccent text="Dashboard" /> (calendar with history of trades and charts);
        <TextAccent text="Trader's diary" />(display of position history, display of open positions);
        <TextAccent text="Positions" />(display of transactions, fundings on the chart);
        <TextAccent text="Trading terminal" /> purchase and sale of assets,
        displaying charts (drawing entry and exit points for trades);
        <TextAccent text="Wallets, balances" /> spots, futures from the exchanges;
        <TextAccent text="Referral system" />;
      </p>
    </div>

    <div class="block">
      <h1 class="title">
        <NuxtLink
          :href="COMPANY_BSL"
          target="_blank"
        >
          <ButtonIcon
            src="experience/bsl.png"
            alt="bsl"
            :size="70"
          />
        </NuxtLink>

        <TextAccent
          class="text"
          text="Bsl"
        />

        <p class="description">( September-2019 - December-2022 )</p>
      </h1>

      <p class="description">
        Worked with
        <TextAccent text="large" />
        projects ( Worldskills, Pike, Netfi, Delta, МОК линзы, Hoff, Магнит, Много лосося, Eyefood)
        <br>
        Gained
        <TextAccent text="extensive" /> experience working with different
        <TextAccent text="teams" />, different
        <TextAccent text="technologies" /> and
        <TextAccent text="libraries" />.
      </p>
    </div>

    <div class="block">
      <h1 class="title">
        <NuxtLink
          :href="COMPANY_VERV"
          target="_blank"
        >
          <ButtonIcon
            src="experience/verv.png"
            alt="verv"
            :size="70"
          />
        </NuxtLink>

        <TextAccent
          class="text"
          text="Verv"
        />

        <p class="description">( August-2018 - August-2019 )</p>
      </h1>

      <p class="description">
        Actively participated in the
        <TextAccent text="development" />
        of content for website and the Running, Walking, Meditate, Sleep applications
      </p>
    </div>

    <NuxtLink
      class="button"
      to="#projects"
    >
      <ButtonText text="See Projects" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { COMPANY_VERV, COMPANY_BSL, COMPANY_LETIT, COMPANY_LETIT_PROJECT } from '~/constants/constants';
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
    font-size: clamp(24px, 3rem, 48px)
  }

  .description {
    text-align: center;
    margin-top: 10px;
    font-size: clamp(16px, 2rem, 24px)
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