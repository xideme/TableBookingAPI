<script>
export default {
    data() { 
        return { 
            counter: 0 
        } 
    }    
}
</script>

<template>
    <button @click="counter++">You just preesed me {{ counter }} times!</button>
    <div id="counter">
        Counter: {{ counter }}
    </div>
</template>