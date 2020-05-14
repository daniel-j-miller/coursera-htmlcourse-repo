library(tidyverse)
library(lubridate)

df <- read_csv("ACT_Road_Crash_Data.csv")


df_inj <- df %>% 
  mutate(CRASH_DATE = dmy(CRASH_DATE), month = month(CRASH_DATE), year = year(CRASH_DATE)) %>% 
  #filter(CRASH_SEVERITY == "Injury") %>% 
  group_by(year, month) %>% 
  summarise(n = n()) %>% 
  mutate(period = if_else(year < 2020, "past", "current")) %>% 
  group_by(period, month) %>% 
  summarise(ave_n = mean(n))
  

ggplot(df_inj,aes(month, ave_n, colour = period)) + geom_line() + xlim(1,12)








cl <- read_csv("chlam.csv")

cl <- cl %>% 
  pivot_longer(names_to = "month", values_to = "rate", cols = Jan:Dec)

cl$month <- factor(cl$month, levels = unique(cl$month))

cl <- cl %>% 
  filter(year > 2008) %>% 
  mutate(period = if_else(year < 2020, "past", "current")) %>% 
  group_by(period, month) %>% 
  summarise(ave = median(rate), min = min(rate),max = max(rate)) %>% 
  #mutate(plus_2sd = ave + 1 * sd, minus_2sd = ave - 1 * sd) %>% 
  ungroup()

ggplot() + 
  geom_ribbon(data = cl[cl$period == "past",],  aes(x = month, ymin = min, ymax = max, group = period, fill = "f"), alpha = 0.2) +
  geom_path(data = cl[cl$period == "past",], aes(x = month, y = ave, group = period, colour = "a"), size = 1, show.legend = TRUE) +
  geom_path(data = cl[cl$period == "current",], aes(x = month, y = ave, group = period, colour = "b"), na.rm = TRUE, size = 1, show.legend = TRUE) +
  ylab("Notifications/100,000") +
  xlab("") +
  ylim(0,45) +
  scale_colour_manual(name = '', 
                      values =c('a' = '#407294','b' = '#ff4646'), labels = c('10 year median \n 2009-2019','2020 rate')) +
  scale_fill_manual(name = '', values = c('f' = '#407294'), labels = c('10 year min/max \n 2009-2019')) +
  guides(fill = guide_legend(override.aes = list(linetype = 0))) + 
  theme_classic() +
  theme(plot.caption = element_text(size = 7), legend.position = c(.95, .00), legend.justification = c("right", "bottom"), legend.box = "horizontal") +
  labs(caption = "Source: National Notifiable Diseases Surveillance System - 14 May, 2020\nhttp://www9.health.gov.au/cda/source/cda-index.cfm",
       title = "Chlamydial infections in Australia")



flu <- read_csv("flu.csv")

flu <- flu %>% 
  pivot_longer(names_to = "month", values_to = "rate", cols = Jan:Dec)

flu$month <- factor(flu$month, levels = unique(flu$month))

flu <- flu %>% 
  filter(year > 2008) %>% 
  mutate(period = if_else(year < 2020, "past", "current")) %>% 
  group_by(period, month) %>% 
  summarise(ave = median(rate), min = min(rate),max = max(rate)) %>% 
  #mutate(plus_2sd = ave + 1 * sd, minus_2sd = ave - 1 * sd) %>% 
  ungroup()

ggplot() + 
  geom_ribbon(data = flu[flu$period == "past",],  aes(x = month, ymin = min, ymax = max, group = period, fill = "f"), alpha = 0.2) +
  geom_path(data = flu[flu$period == "past",], aes(x = month, y = ave, group = period, colour = "a"), size = 1, show.legend = TRUE) +
  geom_path(data = flu[flu$period == "current",], aes(x = month, y = ave, group = period, colour = "b"), na.rm = TRUE, size = 1, show.legend = TRUE) +
  ylab("Notifications/100,000") +
  xlab("") +
  scale_colour_manual(name = '', 
                      values =c('a' = '#407294','b' = '#ff4646'), labels = c('10 year median \n 2009-2019','2020 rate')) +
  scale_fill_manual(name = '', values = c('f' = '#407294'), labels = c('10 year min/max \n 2009-2019')) +
  guides(fill = guide_legend(override.aes = list(linetype = 0))) + 
  theme_classic() +
  theme(plot.caption = element_text(size = 7), legend.position = c(.5, .65), legend.justification = c("right", "bottom"), legend.box = "horizontal") +
  labs(caption = "Source: National Notifiable Diseases Surveillance System - 14 May, 2020\nhttp://www9.health.gov.au/cda/source/cda-index.cfm",
       title = "Influenza (laboratory confirmed) in Australia")








