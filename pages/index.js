import { Box,Img ,Text,SimpleGrid,Button} from "@chakra-ui/react"
import Navbar from "../components/Navbar";

const Home = () => {

  return (
    <>
      <Navbar />
      <Box bgImage="background.png" bgSize="cover" w="full" h="2300px" >
        <Box classname="gambardantulisan" d="flex" flexDir="row">
          <Box classname="Tulisan">
            <Box ml="100px" pt ="180px" w="500px" classname="header">
              <Text color="white" fontSize="64" fontWeight="Bold">Asisten Guru,</Text>
              <Text color = "white" fontSize="48" fontWeight="Bold">Teman Terbaik Guru</Text>
            </Box>

            <Box w="500px" mt="20px" ml="100px">
              <Text color = "white" fontSize="18">Asgur.id siap membantu guru-guru di Indonesia untuk menyalurkan kreativitas mereka dalam kegiatan belajar-mengajar.</Text>
            </Box>
          </Box>
          <Img src="illustration.png" pt="180px" ml="120px"/>
        </Box>

        <Box classname="fitur" d="flex" flexDir="row" >
        <Box classname="jelajahiFitur" w="700px" ml="100px" mt="100px">
          <Text color="white" fontSize="36" fontWeight="Bold">Jelajahi fitur-fitur kami</Text>
          <SimpleGrid
            mt="20px"
            columns={{ sm: 2, md: 2 }}
            spacing="5"
            textAlign="center"
            rounded="lg"
            color="gray.400"
          >
            <Box boxShadow="xl" p="6" rounded="md" bg="white">
             Cari Asisten
            </Box>
            <Box boxShadow="xl" p="6" rounded="md" bg="white">
              Pembuat Soal
            </Box>
            <Box boxShadow="xl" p="6" rounded="md" bg="white">
              Bantuan Materi
            </Box>
            <Box boxShadow="xl" p="6" rounded="md" bg="white">
              COVID-19 Updates
            </Box>
 
          </SimpleGrid>
        </Box>

        <Box
        textAlign="center"
        width ="300px"
        bg="#1B7AD0" p="20px"
        rounded="lg"
        ml="150px"
        mt="100px">
          <Text color="white" fontSize="16" fontWeight="Semibold">Ingin mengakses dan unduh semua materi tanpa batas ?</Text>
          <Text mt="20px" color="white" fontSize="24" fontWeight="Bold">Gabung Sebagai</Text>
          <Text fontSize="24" fontWeight="Bold" >Member Premium</Text>
          <Text mt="20px">Hanya Rp 10.000 / bulan atau Rp 180.000 / tahun</Text>
          <Button mt="20px">Daftar Sekarang</Button>
        </Box>

      </Box>
      
      <Text color="#1396E6" fontSize="36" fontWeight="Bold" ml="100px" mt="230px"> Kesan Pesan Guru</Text>
      <Box classname="KesanPesan"
      padding="30px"
      ml="120px"
      mr="120px">
        <SimpleGrid columns={3} spacing={20}>
        <Box bg="#FAFAFA" height="250px" rounded="lg" boxShadow="md"></Box>
        <Box bg="#FAFAFA" height="250px" rounded="lg" boxShadow="md"></Box>
        <Box bg="#FAFAFA" height="250px" rounded="lg" boxShadow="md"></Box>

</SimpleGrid>
      </Box>

      </Box>
    </>
  )
}

export default Home;