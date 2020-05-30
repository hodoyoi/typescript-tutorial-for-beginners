<template>
  <div class="col-md-3">
    <div class="card">
      <img src="/static/cpu.png" class="img card-img-top" />
      <div class="card-body">
        <h5 class="card-title">CPUの手: <hand-image :sign="comHand"></hand-image></h5>
        <h5 class="card-title">CPUの向き: <hoi-image :hoi="comMuki"></hoi-image></h5>
      </div>
    </div>
  </div>
</template>
