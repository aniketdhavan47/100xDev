import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

class Bus {
    private String busNumber;
    private Map<String, List<Boolean>> seatAvailability;

    public Bus(String busNumber, int totalSeats) {
        this.busNumber = busNumber;
        this.seatAvailability = new HashMap<>();
        initializeSeats(totalSeats);
    }

    private void initializeSeats(int totalSeats) {
        for (int i = 1; i <= totalSeats; i++) {
            String seatKey = "Seat-" + i;
            List<Boolean> datesAvailability = new ArrayList<>();
            seatAvailability.put(seatKey, datesAvailability);
        }
    }

    public boolean bookSeat(String seatKey, String date) {
        List<Boolean> datesAvailability = seatAvailability.get(seatKey);
        if (datesAvailability != null && !datesAvailability.contains(date)) {
            datesAvailability.add(date);
            return true;
        }
        return false;
    }

    public void displayAvailableSeats() {
        System.out.println("Available seats for bus " + busNumber + ":");
        for (Map.Entry<String, List<Boolean>> entry : seatAvailability.entrySet()) {
            String seatKey = entry.getKey();
            List<Boolean> datesAvailability = entry.getValue();
            if (datesAvailability.size() == 0) {
                System.out.println(seatKey);
            }
        }
    }
}

class BookingSystem {
    private Map<String, Bus> buses;

    public BookingSystem() {
        this.buses = new HashMap<>();
    }

    public void addBus(String busNumber, int totalSeats) {
        Bus bus = new Bus(busNumber, totalSeats);
        buses.put(busNumber, bus);
    }

    public boolean bookSeat(String busNumber, String seatKey, String date) {
        Bus bus = buses.get(busNumber);
        if (bus != null) {
            return bus.bookSeat(seatKey, date);
        }
        return false;
    }

    public void displayAvailableSeats(String busNumber) {
        Bus bus = buses.get(busNumber);
        if (bus != null) {
            bus.displayAvailableSeats();
        } else {
            System.out.println("Bus not found.");
        }
    }
}

public class BusBookingSystem {
    public static void main(String[] args) {
        BookingSystem bookingSystem = new BookingSystem();

        // Add buses to the system
        bookingSystem.addBus("Bus-101", 20);
        bookingSystem.addBus("Bus-102", 15);

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Book Seat");
            System.out.println("2. Display Available Seats");
            System.out.println("3. Exit");

            int choice = scanner.nextInt();
            scanner.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter Bus Number: ");
                    String busNumber = scanner.nextLine();
                    System.out.print("Enter Seat Key: ");
                    String seatKey = scanner.nextLine();
                    System.out.print("Enter Date: ");
                    String date = scanner.nextLine();

                    if (bookingSystem.bookSeat(busNumber, seatKey, date)) {
                        System.out.println("Seat booked successfully.");
                    } else {
                        System.out.println("Seat not available or already booked.");
                    }
                    break;

                case 2:
                    System.out.print("Enter Bus Number: ");
                    busNumber = scanner.nextLine();
                    bookingSystem.displayAvailableSeats(busNumber);
                    break;

                case 3:
                    System.out.println("Exiting the system.");
                    scanner.close();
                    System.exit(0);

                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
