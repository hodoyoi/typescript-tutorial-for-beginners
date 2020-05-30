<template>
  <div class="col-md-3">
    <div class="card">
      <img src="/static/human.png" class="img card-img-top" />
      <div class="card-body">
        <h5 class="card-title">人間の手: <hand-image :sign="humanHand"></hand-image></h5>
        <h5 class="card-title">人間の向き: <hoi-image :hoi="humanMuki"></hoi-image></h5>
      </div>
    </div>
  </div>
</template>
