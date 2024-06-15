// server/mockData/queries.js

const mockQueries = [
  {
    name: "Second Highest Salary",
    description: `SELECT MAX(salary) AS SecondHighestSalary
      FROM employees
      WHERE salary < (SELECT MAX(salary) FROM employees);
      `,
  },
  {
    name: "November Employee Joinees",
    description: `SELECT *
    FROM employees
    WHERE MONTH(join_date) = 11
    AND YEAR(join_date) = 2023; -- Replace 2023 with the desired year
    `,
  },
  {
    name: "Highest Paid Female Employee",
    description: `SELECT *
    FROM employees
    WHERE gender = 'Female'
    ORDER BY salary DESC
    LIMIT 1;
    `,
  },
  {
    name: "Youngest Employee",
    description: `SELECT *
    FROM employees
    ORDER BY age ASC
    LIMIT 1;
    `,
  },
  {
    name: "Employees with Bonus",
    description: `SELECT *
    FROM employees
    WHERE bonus > 0;
    `,
  },
  {
    name: "Highest Paid Female Employee",
    description: `SELECT *
    FROM employees
    WHERE gender = 'Female'
    ORDER BY salary DESC
    LIMIT 1;
    `,
  },
  {
    name: "Youngest Employee",
    description: `SELECT *
    FROM employees
    ORDER BY age ASC
    LIMIT 1;
    `,
  },
  {
    name: "Employees with Bonus",
    description: `SELECT *
    FROM employees
    WHERE bonus > 0;
    `,
  },
  // Add 50 more popular questions
  {
    name: "Employee with Longest Tenure",
    description: `SELECT *
    FROM employees
    ORDER BY tenure DESC
    LIMIT 1;
    `,
  },
  {
    name: "Average Employee Salary",
    description: `SELECT AVG(salary) AS AverageSalary
    FROM employees;
    `,
  },
  {
    name: "Top 10 Highest Paid Employees",
    description: `SELECT *
    FROM employees
    ORDER BY salary DESC
    LIMIT 10;
    `,
  },
  {
    name: "Employees with Overdue Projects",
    description: `SELECT *
    FROM employees
    WHERE projects_deadline < NOW();
    `,
  },
  {
    name: "Employees Grouped by Department",
    description: `SELECT department, COUNT(*) AS num_employees
    FROM employees
    GROUP BY department;
    `,
  },
  {
    name: "Employees by Age Group",
    description: `SELECT 
    CASE
      WHEN age < 30 THEN 'Under 30'
      WHEN age >= 30 AND age < 40 THEN '30-39'
      WHEN age >= 40 AND age < 50 THEN '40-49'
      ELSE '50 and above'
    END AS age_group,
    COUNT(*) AS num_employees
    FROM employees
    GROUP BY age_group;
    `,
  },
  {
    name: "Employees with Managerial Role",
    description: `SELECT *
    FROM employees
    WHERE role = 'Manager';
    `,
  },
  {
    name: "Employees by Hire Year",
    description: `SELECT YEAR(join_date) AS hire_year, COUNT(*) AS num_employees
    FROM employees
    GROUP BY hire_year
    ORDER BY hire_year;
    `,
  },
  {
    name: "Employee with Highest Performance Rating",
    description: `SELECT *
    FROM employees
    ORDER BY performance_rating DESC
    LIMIT 1;
    `,
  },
  // Add more mock queries as needed
  {
    name: "Employees by Department and Gender",
    description: `SELECT department, gender, COUNT(*) AS num_employees
    FROM employees
    GROUP BY department, gender;
    `,
  },
  {
    name: "Employees by Years of Service",
    description: `SELECT 
    CASE
      WHEN tenure < 1 THEN 'Less than 1 year'
      WHEN tenure >= 1 AND tenure < 5 THEN '1-4 years'
      WHEN tenure >= 5 AND tenure < 10 THEN '5-9 years'
      ELSE '10 years and above'
    END AS years_of_service,
    COUNT(*) AS num_employees
    FROM employees
    GROUP BY years_of_service;
    `,
  },
  {
    name: "Employees with Overtime Hours",
    description: `SELECT *
    FROM employees
    WHERE overtime_hours > 0;
    `,
  },
  {
    name: "Employees by Education Level",
    description: `SELECT education_level, COUNT(*) AS num_employees
    FROM employees
    GROUP BY education_level;
    `,
  },
  {
    name: "Employees with Remote Work Arrangement",
    description: `SELECT *
    FROM employees
    WHERE remote_work = 'Yes';
    `,
  },
  {
    name: "Total Sales by Product Category",
    description: `SELECT category, SUM(amount) AS total_sales
    FROM sales
    GROUP BY category;
    `,
  },
  {
    name: "Most Profitable Products",
    description: `SELECT product_name, SUM(profit) AS total_profit
    FROM sales
    GROUP BY product_name
    ORDER BY total_profit DESC
    LIMIT 10;
    `,
  },
  {
    name: "Average Order Value",
    description: `SELECT AVG(order_value) AS avg_order_value
    FROM orders;
    `,
  },
  {
    name: "Customers with Highest Purchase Frequency",
    description: `SELECT customer_id, COUNT(*) AS purchase_frequency
    FROM orders
    GROUP BY customer_id
    ORDER BY purchase_frequency DESC
    LIMIT 10;
    `,
  },
  {
    name: "Total Revenue by Region",
    description: `SELECT region, SUM(revenue) AS total_revenue
    FROM sales
    GROUP BY region;
    `,
  },
  // Add more mock queries as needed
  {
    name: "Top Selling Products in Each Category",
    description: `SELECT category, product_name, SUM(quantity_sold) AS total_quantity_sold
    FROM sales
    GROUP BY category, product_name
    ORDER BY category, total_quantity_sold DESC;
    `,
  },
  {
    name: "Customer Lifetime Value",
    description: `SELECT customer_id, SUM(order_value) AS total_spent
    FROM orders
    GROUP BY customer_id
    ORDER BY total_spent DESC;
    `,
  },
  {
    name: "Most Active Customers",
    description: `SELECT customer_id, COUNT(*) AS total_orders
    FROM orders
    GROUP BY customer_id
    ORDER BY total_orders DESC
    LIMIT 10;
    `,
  },
  {
    name: "Product Performance Over Time",
    description: `SELECT date, product_name, SUM(quantity_sold) AS total_quantity_sold
    FROM sales
    GROUP BY date, product_name;
    `,
  },
  {
    name: "Revenue Trend",
    description: `SELECT date, SUM(revenue) AS total_revenue
    FROM sales
    GROUP BY date
    ORDER BY date;
    `,
  },
  {
    name: "Combine Two Tables",
    description: `SELECT p.FirstName, p.LastName, a.City, a.State
    FROM Person p
    LEFT JOIN Address a
    ON p.PersonId = a.PersonId;
    `,
  },
  {
    name: "Customers Who Never Order",
    description: `SELECT c.Name AS Customers
    FROM Customers c
    LEFT JOIN Orders o
    ON c.CustomerId = o.CustomerId
    WHERE o.CustomerId IS NULL;
    `,
  },
  {
    name: "Department Top Three Salaries",
    description: `SELECT d.Name AS Department, e.Name AS Employee, e.Salary
    FROM Employee e
    JOIN Department d ON e.DepartmentId = d.Id
    WHERE (SELECT COUNT(DISTINCT Salary) FROM Employee WHERE DepartmentId = d.Id AND Salary > e.Salary) < 3;
    `,
  },
  {
    name: "Nth Highest Salary",
    description: `SELECT DISTINCT Salary AS SecondHighestSalary
      FROM Employee e1
      WHERE N-1 = (
          SELECT COUNT(DISTINCT Salary) 
          FROM Employee e2 
          WHERE e2.Salary > e1.Salary
      );
      `,
  },
  {
    name: "Rank Scores",
    description: `SELECT Score,
      DENSE_RANK() OVER (ORDER BY Score DESC) AS Rank
      FROM Scores;
      `,
  },
  {
    name: "Department Top Three Salaries",
    description: `SELECT d.Department, e1.Name, e1.Salary
      FROM Employee e1
      JOIN Department d ON e1.DepartmentId = d.Id
      WHERE 3 > (
          SELECT COUNT(DISTINCT e2.Salary)
          FROM Employee e2
          WHERE e2.Salary > e1.Salary AND e1.DepartmentId = e2.DepartmentId
      );
      `,
  },
  {
    name: "Consecutive Numbers",
    description: `SELECT DISTINCT l1.Num AS ConsecutiveNums
      FROM Logs l1, Logs l2, Logs l3
      WHERE l1.Id = l2.Id - 1
      AND l2.Id = l3.Id - 1
      AND l1.Num = l2.Num
      AND l2.Num = l3.Num;
      `,
  },
  {
    name: "Customers Who Never Order",
    description: `SELECT c.Name AS Customers
      FROM Customers c
      LEFT JOIN Orders o ON c.Id = o.CustomerId
      WHERE o.CustomerId IS NULL;
      `,
  },
  {
    name: "Rising Temperature",
    description: `SELECT w1.Id
      FROM Weather w1, Weather w2
      WHERE TO_DAYS(w1.Date) - TO_DAYS(w2.Date) = 1
      AND w1.Temperature > w2.Temperature;
      `,
  },
  {
    name: "Combine Two Tables",
    description: `SELECT p.FirstName, p.LastName, a.City, a.State
      FROM Person p
      LEFT JOIN Address a ON p.PersonId = a.PersonId;
      `,
  },
  {
    name: "Trips and Users",
    description: `SELECT Request_at AS Day,
      ROUND(COUNT(IF(Status != 'completed', TRUE, NULL)) / COUNT(*), 2) AS 'Cancellation Rate'
      FROM Trips
      WHERE Client_Id IN (
          SELECT Users_Id
          FROM Users
          WHERE Banned = 'No'
      )
      AND Driver_Id IN (
          SELECT Users_Id
          FROM Users
          WHERE Banned = 'No'
      )
      AND Request_at BETWEEN '2013-10-01' AND '2013-10-03'
      GROUP BY Request_at;
      `,
  },
  {
    name: "Big Countries",
    description: `SELECT name, population, area
      FROM World
      WHERE area > 3000000
      OR population > 25000000;
      `,
  },
  {
    name: "Classes More Than 5 Students",
    description: `SELECT class
      FROM courses
      GROUP BY class
      HAVING COUNT(DISTINCT student) >= 5;
      `,
  },
  {
    name: "Consecutive Numbers II",
    description: `SELECT DISTINCT l1.Num AS ConsecutiveNums
      FROM Logs l1, Logs l2, Logs l3
      WHERE l1.Id = l2.Id - 1
      AND l2.Id = l3.Id - 1
      AND l1.Num = l2.Num
      AND l2.Num = l3.Num;
      `,
  },
  {
    name: "Employee Importance",
    description: `SELECT SUM(e1.Importance) AS TotalImportance
      FROM Employee e1
      JOIN (
          SELECT DISTINCT Id
          FROM Employee
          WHERE Id = id
          OR Id IN (SELECT DISTINCT ManagerId FROM Employee)
      ) AS e2
      ON e1.Id = e2.Id;
      `,
  },
  {
    name: "Duplicate Emails",
    description: `SELECT Email
      FROM Person
      GROUP BY Email
      HAVING COUNT(*) > 1;
      `,
  },
  {
    name: "Customers with At Least N Orders",
    description: `SELECT CustomerId
      FROM Orders
      GROUP BY CustomerId
      HAVING COUNT(*) >= N;
      `,
  },
  {
    name: "Consecutive Available Seats",
    description: `SELECT DISTINCT c1.seat_id AS ConsecutiveSeats
      FROM cinema c1, cinema c2
      WHERE (c1.seat_id = c2.seat_id - 1 OR c1.seat_id = c2.seat_id + 1)
      AND c1.free = 1
      AND c2.free = 1;
      `,
  },
  // Add more LeetCode-inspired queries as needed
  {
    name: "Classes and Their Students",
    description: `SELECT class, COUNT(student) AS num_students
      FROM courses
      GROUP BY class
      ORDER BY num_students DESC, class ASC;
      `,
  },
  {
    name: "Employees Earning More Than Their Managers",
    description: `SELECT e1.Name AS Employee
      FROM Employee e1, Employee e2
      WHERE e1.ManagerId = e2.Id
      AND e1.Salary > e2.Salary;
      `,
  },
  {
    name: "Not Boring Movies",
    description: `SELECT *
      FROM cinema
      WHERE id % 2 != 0
      AND description != 'boring'
      ORDER BY rating DESC;
      `,
  },
  {
    name: "Department Highest Salary",
    description: `SELECT Department, MAX(Salary) AS HighestSalary
      FROM Employee
      GROUP BY Department;
      `,
  },
  {
    name: "Exchange Seats",
    description: `SELECT
      CASE
          WHEN id % 2 = 0 THEN id - 1
          WHEN id % 2 != 0 AND id != (SELECT COUNT(*) FROM seat) THEN id + 1
          ELSE id
      END AS id,
      student
      FROM seat
      ORDER BY id;
      `,
  },
  {
    name: "Trips and Users II",
    description: `SELECT Request_at AS Day,
      ROUND(SUM(CASE WHEN Status = 'completed' THEN 0 ELSE 1 END) / COUNT(*), 2) AS 'Cancellation Rate'
      FROM Trips
      WHERE Client_Id IN (
          SELECT Users_Id
          FROM Users
          WHERE Banned = 'No'
      )
      AND Driver_Id IN (
          SELECT Users_Id
          FROM Users
          WHERE Banned = 'No'
      )
      AND Request_at BETWEEN '2013-10-01' AND '2013-10-03'
      GROUP BY Request_at;
      `,
  },
  {
    name: "Average Time of Process per Machine",
    description: `SELECT machine_id,
      ROUND(SUM((UNIX_TIMESTAMP(end_time) - UNIX_TIMESTAMP(start_time))/60)/COUNT(*), 2) AS processing_time
      FROM Activity
      GROUP BY machine_id;
      `,
  },
  {
    name: "Product Sales Analysis III",
    description: `SELECT product_id, year,
      SUM(CASE WHEN month IN ('01', '02', '03') THEN price ELSE 0 END) AS Q1,
      SUM(CASE WHEN month IN ('04', '05', '06') THEN price ELSE 0 END) AS Q2,
      SUM(CASE WHEN month IN ('07', '08', '09') THEN price ELSE 0 END) AS Q3,
      SUM(CASE WHEN month IN ('10', '11', '12') THEN price ELSE 0 END) AS Q4
      FROM Sales
      GROUP BY product_id, year;
      `,
  },
  {
    name: "Nth Department Highest Salary",
    description: `SELECT Department, Salary
      FROM (
          SELECT Department, Salary,
          DENSE_RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS Dept_Rank
          FROM Employee
      ) AS RankedSalaries
      WHERE Dept_Rank = N;
      `,
  },
  {
    name: "Reported Posts",
    description: `SELECT extra AS action_date, COUNT(post_id) AS report_count
      FROM actions
      WHERE action = 'report'
      GROUP BY extra;
      `,
  },

  {
    name: "Number of Transactions per Visit",
    description: `SELECT visit_date,
      COUNT(DISTINCT transaction_id) AS transaction_count
      FROM Transactions
      GROUP BY visit_date;
      `,
  },
  {
    name: "Last Person to Fit in the Elevator",
    description: `SELECT
      CASE WHEN SUM(weight) <= 1000 THEN MAX(person_name) ELSE 'The elevator is full' END AS person_name
      FROM queue
      ORDER BY time DESC
      LIMIT 1;
      `,
  },
  {
    name: "Rank Teams by Votes",
    description: `SELECT team,
      GROUP_CONCAT(voter ORDER BY voter) AS votes
      FROM votes
      GROUP BY team
      ORDER BY votes DESC, team;
      `,
  },
  {
    name: "Customers Who Bought All Products",
    description: `SELECT customer_id
      FROM orders
      GROUP BY customer_id
      HAVING COUNT(DISTINCT product_id) = (SELECT COUNT(*) FROM products);
      `,
  },
  {
    name: "Maximum Population Year",
    description: `SELECT year
      FROM (
          SELECT year, SUM(change) AS population
          FROM Population
          GROUP BY year
          ORDER BY population DESC, year ASC
          LIMIT 1
      ) AS max_population;
      `,
  },
  {
    name: "Department Top Salary Holder",
    description: `SELECT Department, Name, Salary
      FROM (
          SELECT e.Department, e.Name, e.Salary,
          DENSE_RANK() OVER (PARTITION BY e.Department ORDER BY e.Salary DESC) AS SalaryRank
          FROM Employee e
      ) AS RankedSalaries
      WHERE SalaryRank = 1;
      `,
  },
  {
    name: "Employee Bonus Calculation",
    description: `SELECT Name, Salary * BonusPercent AS Bonus
      FROM Employee;
      `,
  },
  {
    name: "Product Price Update",
    description: `UPDATE Products
      SET Price = Price * 1.1
      WHERE Category = 'Electronics';
      `,
  },
  {
    name: "Average Response Time",
    description: `SELECT Date, AVG(ResponseTime) AS AvgResponseTime
      FROM Tickets
      GROUP BY Date;
      `,
  },
  {
    name: "Top K Frequently Mentioned Keywords",
    description: `SELECT Keyword, COUNT(*) AS Frequency
      FROM Keywords
      GROUP BY Keyword
      ORDER BY Frequency DESC
      LIMIT K;
      `,
  },

  {
    name: "Average Revenue Per User",
    description: `SELECT u.UserId, AVG(p.Price) AS AvgRevenue
      FROM Users u
      JOIN Purchases p ON u.UserId = p.UserId
      GROUP BY u.UserId;
      `,
  },
  {
    name: "Reformat Department Names",
    description: `SELECT
      CONCAT(
          UPPER(SUBSTRING(DepartmentName, 1, 1)),
          LOWER(SUBSTRING(DepartmentName, 2))
      ) AS DepartmentName
      FROM Departments;
      `,
  },
  {
    name: "Recent Orders",
    description: `SELECT *
      FROM Orders
      WHERE OrderDate >= DATE_SUB(NOW(), INTERVAL 7 DAY);
      `,
  },
  {
    name: "Employee Average Tenure by Department",
    description: `SELECT Department, AVG(Tenure) AS AvgTenure
      FROM Employee
      GROUP BY Department;
      `,
  },
  {
    name: "Total Sales Per Month",
    description: `SELECT MONTH(OrderDate) AS Month, SUM(TotalAmount) AS TotalSales
      FROM Orders
      GROUP BY MONTH(OrderDate);
      `,
  },
  {
    name: "Last Person to Fit in the Elevator",
    description: `SELECT
    CASE WHEN SUM(weight) <= 1000 THEN MAX(person_name) ELSE 'The elevator is full' END AS person_name
    FROM queue
    ORDER BY time DESC
    LIMIT 1;
    `,
  },
  {
    name: "Find the Duplicate Number",
    description: `SELECT num
    FROM (SELECT num, COUNT(num) AS cnt FROM nums GROUP BY num) AS t
    WHERE cnt > 1;
    `,
  },
  {
    name: "Sales Analysis I",
    description: `SELECT seller_id
    FROM Sales
    GROUP BY seller_id
    HAVING SUM(price) = (SELECT MAX(total) FROM (SELECT seller_id, SUM(price) AS total FROM Sales GROUP BY seller_id) AS temp);
    `,
  },
  {
    name: "Consecutive Numbers III",
    description: `SELECT DISTINCT t1.num AS ConsecutiveNums
    FROM logs t1, logs t2, logs t3
    WHERE t1.id = t2.id - 1
    AND t2.id = t3.id - 1
    AND t1.num = t2.num
    AND t2.num = t3.num;
    `,
  },
  {
    name: "Big Countries",
    description: `SELECT name, population, area
    FROM World
    WHERE area > 3000000
    OR population > 25000000;
    `,
  },

  {
    name: "Employees Earning More Than Their Managers",
    description: `SELECT e1.Name AS Employee
    FROM Employee e1, Employee e2
    WHERE e1.ManagerId = e2.Id
    AND e1.Salary > e2.Salary;
    `,
  },
  {
    name: "Rank Scores",
    description: `SELECT Score,
    DENSE_RANK() OVER (ORDER BY Score DESC) AS Rank
    FROM Scores;
    `,
  },
  {
    name: "Customers Who Never Order",
    description: `SELECT c.Name AS Customers
    FROM Customers c
    LEFT JOIN Orders o ON c.Id = o.CustomerId
    WHERE o.CustomerId IS NULL;
    `,
  },
  {
    name: "Employee Importance",
    description: `SELECT SUM(e1.Importance) AS TotalImportance
    FROM Employee e1
    JOIN (
        SELECT DISTINCT Id
        FROM Employee
        WHERE Id = id
        OR Id IN (SELECT DISTINCT ManagerId FROM Employee)
    ) AS e2
    ON e1.Id = e2.Id;
    `,
  },
  {
    name: "Trips and Users II",
    description: `SELECT Request_at AS Day,
    ROUND(SUM(CASE WHEN Status = 'completed' THEN 0 ELSE 1 END) / COUNT(*), 2) AS 'Cancellation Rate'
    FROM Trips
    WHERE Client_Id IN (
        SELECT Users_Id
        FROM Users
        WHERE Banned = 'No'
    )
    AND Driver_Id IN (
        SELECT Users_Id
        FROM Users
        WHERE Banned = 'No'
    )
    AND Request_at BETWEEN '2013-10-01' AND '2013-10-03'
    GROUP BY Request_at;
    `,
  },
  {
    name: "Classes and Their Students",
    description: `SELECT class, COUNT(student) AS num_students
    FROM courses
    GROUP BY class
    ORDER BY num_students DESC, class ASC;
    `,
  },
  {
    name: "Employees Who Report to Their Manager",
    description: `SELECT e1.Name AS Employee
    FROM Employee e1
    JOIN Employee e2 ON e1.ManagerId = e2.Id
    AND e1.Id = e2.ManagerId;
    `,
  },
  {
    name: "Duplicate Emails",
    description: `SELECT Email
    FROM Person
    GROUP BY Email
    HAVING COUNT(*) > 1;
    `,
  },
  {
    name: "Total Sales by Product Category",
    description: `SELECT category, SUM(amount) AS total_sales
    FROM sales
    GROUP BY category;
    `,
  },
  {
    name: "Department Top Three Salaries",
    description: `SELECT d.Department, e1.Name, e1.Salary
    FROM Employee e1
    JOIN Department d ON e1.DepartmentId = d.Id
    WHERE 3 > (
        SELECT COUNT(DISTINCT e2.Salary)
        FROM Employee e2
        WHERE e2.Salary > e1.Salary AND e1.DepartmentId = e2.DepartmentId
    );
    `,
  },

  {
    name: "Consecutive Available Seats",
    description: `SELECT DISTINCT c1.seat_id AS ConsecutiveSeats
    FROM cinema c1, cinema c2
    WHERE (c1.seat_id = c2.seat_id - 1 OR c1.seat_id = c2.seat_id + 1)
    AND c1.free = 1
    AND c2.free = 1;
    `,
  },
  {
    name: "Average Time of Process per Machine",
    description: `SELECT machine_id,
    ROUND(SUM((UNIX_TIMESTAMP(end_time) - UNIX_TIMESTAMP(start_time))/60)/COUNT(*), 2) AS processing_time
    FROM Activity
    GROUP BY machine_id;
    `,
  },
  {
    name: "Product Sales Analysis III",
    description: `SELECT product_id, year,
    SUM(CASE WHEN month IN ('01', '02', '03') THEN price ELSE 0 END) AS Q1,
    SUM(CASE WHEN month IN ('04', '05', '06') THEN price ELSE 0 END) AS Q2,
    SUM(CASE WHEN month IN ('07', '08', '09') THEN price ELSE 0 END) AS Q3,
    SUM(CASE WHEN month IN ('10', '11', '12') THEN price ELSE 0 END) AS Q4
    FROM Sales
    GROUP BY product_id, year;
    `,
  },
  {
    name: "Nth Department Highest Salary",
    description: `SELECT Department, Salary
    FROM (
        SELECT Department, Salary,
        DENSE_RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS Dept_Rank
        FROM Employee
    ) AS RankedSalaries
    WHERE Dept_Rank = N;
    `,
  },
  {
    name: "Reported Posts",
    description: `SELECT extra AS action_date, COUNT(post_id) AS report_count
    FROM actions
    WHERE action = 'report'
    GROUP BY extra;
    `,
  },
  {
    name: "Average Salary Excluding the Minimum and Maximum Salary",
    description: `SELECT AVG(Salary) AS AverageSalary
    FROM (
        SELECT Salary
        FROM Employee
        ORDER BY Salary
        LIMIT (SELECT COUNT(*) FROM Employee) - 1
        OFFSET 1
    ) AS SalaryRange;
    `,
  },
  {
    name: "Customers Who Bought All Products",
    description: `SELECT customer_id
    FROM orders
    GROUP BY customer_id
    HAVING COUNT(DISTINCT product_id) = (SELECT COUNT(*) FROM products);
    `,
  },
  {
    name: "Consecutive Characters",
    description: `SELECT MAX(LENGTH(CONVERT(REGEXP_REPLACE(s, '(.)\\1*', '\\1,'), CHAR))) AS MaxConsecutive
    FROM table;
    `,
  },
  {
    name: "Rising Temperature",
    description: `SELECT w1.Id
    FROM Weather w1, Weather w2
    WHERE TO_DAYS(w1.Date) - TO_DAYS(w2.Date) = 1
    AND w1.Temperature > w2.Temperature;
    `,
  },
  {
    name: "Not Boring Movies",
    description: `SELECT *
    FROM cinema
    WHERE id % 2 != 0
    AND description != 'boring'
    ORDER BY rating DESC;
    `,
  },

  {
    name: "Classes More Than 5 Students",
    description: `SELECT class
    FROM courses
    GROUP BY class
    HAVING COUNT(DISTINCT student) >= 5;
    `,
  },
  {
    name: "Project Employees I",
    description: `SELECT *
    FROM Employee
    WHERE employee_id IN (
        SELECT DISTINCT employee_id
        FROM Project
    );
    `,
  },
  {
    name: "Project Employees II",
    description: `SELECT employee_id
    FROM Project
    GROUP BY employee_id
    HAVING COUNT(project_id) >= 2;
    `,
  },
  {
    name: "Classes Cancelled Due to Bad Weather",
    description: `SELECT class_id
    FROM courses
    WHERE class_id NOT IN (
        SELECT DISTINCT class_id
        FROM courses
        WHERE weather = 'bad'
    );
    `,
  },
  {
    name: "Biggest Window Between Visits",
    description: `SELECT MAX(DATEDIFF(
        (SELECT MIN(visit_date) FROM customer_visits WHERE visit_date > c.visit_date),
        c.visit_date
    )) AS days_apart
    FROM customer_visits c;
    `,
  },
  {
    name: "Friend Requests I: Overall Acceptance Rate",
    description: `SELECT IFNULL(ROUND(
        SUM(IF(status = 'accepted', 1, 0)) / SUM(IF(status != 'declined', 1, 0)), 2), 0) AS accept_rate
    FROM request_accepted;
    `,
  },
  {
    name: "Top Competitors",
    description: `SELECT competitor_id, COUNT(DISTINCT competition_id) AS num_competitions
    FROM results
    WHERE result = 'win'
    GROUP BY competitor_id
    ORDER BY num_competitions DESC, competitor_id ASC
    LIMIT 10;
    `,
  },
  {
    name: "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
    description: `SELECT city
    FROM (
        SELECT city, COUNT(*) AS num_neighbors
        FROM distance
        WHERE distance <= threshold
        GROUP BY city
        ORDER BY num_neighbors ASC, city ASC
    ) AS t
    WHERE num_neighbors = (SELECT MIN(num_neighbors) FROM (
        SELECT city, COUNT(*) AS num_neighbors
        FROM distance
        WHERE distance <= threshold
        GROUP BY city
    ) AS temp);
    `,
  },
  {
    name: "Alert Using Same Key-Card Three or More Times in a One Hour Period",
    description: `SELECT DISTINCT a1.card_id
    FROM actions a1, actions a2, actions a3
    WHERE a1.card_id = a2.card_id
    AND a2.card_id = a3.card_id
    AND a1.event_type = 'enter'
    AND a2.event_type = 'exit'
    AND a3.event_type = 'enter'
    AND a1.timestamp BETWEEN a3.timestamp - INTERVAL 1 HOUR AND a3.timestamp;
    `,
  },
  {
    name: "Number of Burgers Sold with No Cheese",
    description: `SELECT b.sale_id
    FROM burgers b
    LEFT JOIN toppings t ON b.sale_id = t.sale_id AND t.topping = 'cheese'
    WHERE t.topping IS NULL
    ORDER BY b.sale_id;
    `,
  },

  {
    name: "Exchange Seats",
    description: `SELECT
    CASE
        WHEN id % 2 = 0 THEN id - 1
        WHEN id % 2 != 0 AND id != (SELECT COUNT(*) FROM seat) THEN id + 1
        ELSE id
    END AS id,
    student
    FROM seat
    ORDER BY id;
    `,
  },
  {
    name: "Department Highest Salary",
    description: `SELECT Department, MAX(Salary) AS HighestSalary
    FROM Employee
    GROUP BY Department;
    `,
  },
  {
    name: "Average Time of Process per Machine",
    description: `SELECT machine_id,
    ROUND(SUM((UNIX_TIMESTAMP(end_time) - UNIX_TIMESTAMP(start_time))/60)/COUNT(*), 2) AS processing_time
    FROM Activity
    GROUP BY machine_id;
    `,
  },
  {
    name: "Product Sales Analysis III",
    description: `SELECT product_id, year,
    SUM(CASE WHEN month IN ('01', '02', '03') THEN price ELSE 0 END) AS Q1,
    SUM(CASE WHEN month IN ('04', '05', '06') THEN price ELSE 0 END) AS Q2,
    SUM(CASE WHEN month IN ('07', '08', '09') THEN price ELSE 0 END) AS Q3,
    SUM(CASE WHEN month IN ('10', '11', '12') THEN price ELSE 0 END) AS Q4
    FROM Sales
    GROUP BY product_id, year;
    `,
  },
];

module.exports = mockQueries;
