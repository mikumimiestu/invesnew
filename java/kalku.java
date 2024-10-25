public class AverageCalculator {
    public static void main(String[] args) {
        // Array angka
        int[] numbers = {
            4000, 4100, 3980, 3990, 3970, 3950, 3960, 3910, 3840, 3810,
            3830, 3890, 3760, 3790, 3790, 3800, 3740, 3710, 3610, 3680,
            3660, 3630, 3500, 3790, 3790, 3800, 3740, 3710, 3610, 3680,
            3790, 3800, 3740, 3790, 3810, 3880, 3820, 3870, 3890, 3880,
            3890, 3890, 3890, 3950, 4000, 4200, 4100, 4130, 4180, 4120,
            4190, 4240, 4280, 4250, 4280, 4290, 4250, 4290, 4270, 4270,
            4260, 4280, 4290, 4380, 4380, 4410, 4480, 4420, 4410, 4440,
            4440, 4480, 4580, 4520, 4530, 4580, 4460, 4470, 4500, 4480,
            4530, 4590, 4630, 4630, 4600, 4640, 4680, 4660, 4640, 4630,
            4610, 4610, 4550, 4610, 4630, 4690, 4710, 4780, 4780, 4710,
            4760, 4780, 4850, 4820, 4890, 4950, 4980, 5000, 5000, 5050,
            5090, 5020, 4950, 4920, 4950, 5000, 5020, 5050, 5080, 5090,
            5100, 5120, 5160, 5130, 5170, 5160, 5180, 5210, 5200, 5230,
            5240, 5250, 5160, 5140, 5170, 5120, 5140, 5130, 5160, 5030,
            5180, 5160, 5230, 5320, 5520, 5510, 5570, 5650, 5850, 5840,
            5910, 5890, 5860, 5800, 5860, 5750, 5790, 5840, 5860, 5900,
            6000, 5980, 6090, 5970, 5910, 5920, 6070, 6010, 5900, 5780,
            5700
        };

        // Menghitung rata-rata
        double sum = 0.0;
        for (int number : numbers) {
            sum += number;
        }
        double average = sum / numbers.length;
        System.out.printf("Average: %.2f\n", average);

        // Menghitung peningkatan dari 1 hari
        int initialValue = 5780; // Rp 5740 adalah harga awal bulan Oktober
        int finalValue = 5700;

        // Menghitung peningkatan poin
        int pointIncrease = finalValue - initialValue;
        System.out.println("Point Increase: " + pointIncrease);

        // Menghitung persentase peningkatan
        double percentageIncrease = ((double) pointIncrease / initialValue) * 100;
        System.out.printf("Percentage Increase: %.2f%%\n", percentageIncrease);
    }
}
