<template>
    <div>
        <p v-for="student in students">{{ student }}</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            students:['Tom', 'Dick', 'Harry'],
        }
    }
}
</script>
