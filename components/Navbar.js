import { Box, Text,Img,Button,ButtonGroup } from "@chakra-ui/react"
import { useRouter } from "next/router"


const Navbar = () => {
  const router = useRouter()
    return (
    <Box
        w="full"
        h="76px"
        bg="white"
        boxShadow="xl"
        fontSize="1.5rem"
        fontWeight="700"
        d="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Img src="/LOGO.png" ml ="76px" mr="20px"/>
        <Box mr="400px" d="flex" flexDir="row" w="500px" justifyContent="space-between" fontSize="18px">
          <Text cursor="pointer" onClick={() => router.push('/react')}>Home</Text>
          <Text cursor="pointer">Cari Asisten</Text>
          <Text cursor="pointer">Buat Soal</Text>
          <Text cursor="pointer">Bantuan Materi</Text>
        </Box>
        <Button mr="50px" colorScheme="blue">Daftar/Masuk</Button>
      </Box>
    )
}

export default Navbar;