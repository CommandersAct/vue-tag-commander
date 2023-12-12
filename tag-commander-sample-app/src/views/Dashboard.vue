<template>
  <section class="section dashboard section-text-illustration-horizontal img-bg-center inner-sm">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 animated" style="opacity: 1;">
          <header class="center-block title text-center inner-bottom-xs">
            <h2>Tag lifecycle management</h2>
          </header>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 text animated" style="opacity: 1;">
          <h3 class="text-center"></h3>
          <div class="text-left">
            <p>Digital organisations must enhance their operational agility if they are to survive in the ever-changing worlds of Adtech and Martech.</p>
            <p>Managing the lifecycle of technology partnerships is the first step to this longevity.</p>
            <p>Any successful marketing team must be able to deploy campaigns quickly.</p>
            <p>An Enterprise Tag Management solution empowers them to do so while helping ensuring proper configuration and optimisation.</p>
          </div>
        </div>
        <div class="col-sm-6 animated" style="opacity: 1;">
          <div class="illustration">
            <img width="440" height="330" src="https://www.commandersact.com/wp-content/uploads/2016/10/cycle.png" class="attachment-full size-full" alt="Tag lifecycle management">
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import TC_Wrapper from "vue-tag-commander";

  const wrapper = TC_Wrapper.getInstance();

  export default  {
    name: 'Dashboard',
    mounted() {
      wrapper.trackPageLoad({tcReloadOnly: [
          { ids: '4056', idc: '12' },
        ]})
    }
  }
</script>

<style lang="scss" scoped>
/* Dashboard */
.dashboard {
  section header h2 {
    font-weight: 900;
    font-size: 38px;
    line-height: 110%;
    margin-bottom: 25px;
  }
  .row {
    display: flex;
    flex-direction: row;
    & > div {
      flex-grow: 1;
    }
  }
  .text-left {
    margin-top: 40px;
  }
  .illustration {
    margin-top: -45px;
  }
}
</style>
